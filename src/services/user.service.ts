import pool from '../config/db';
import { userLoginDTO, userRegisterDTO } from '../dtos/user.dto';
import { generateToken } from '../utils/jwtUtil';
import { comparePassword, hashPassword } from './../utils/passwordHash';

export const userLogin = async (data: userLoginDTO) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1;',
        [data.email]
    );

    if (result.rowCount === 0) {
        throw new Error('User not found');
    }

    if (!await comparePassword(data.kata_sandi, result.rows[0].password)) {
        throw new Error('User Login Error');
    };

    return generateToken({ id: result.rows[0].id, email: result.rows[0].email });
};

export const userRegister = async (data: userRegisterDTO) => {
    const query = `
    INSERT INTO users (
        nama_lengkap,
        jenis_kelamin,
        no_hp,
        email,
        kata_sandi
    ) VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;

    const values = [
        data.nama_lengkap,
        data.jenis_kelamin,
        data.no_hp,
        data.email,
        hashPassword(data.kata_sandi)
    ];

    const result = await pool.query(query, values);
    return result.rows[0];

};

