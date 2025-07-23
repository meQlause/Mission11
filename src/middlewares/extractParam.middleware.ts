import { Request, Response, NextFunction } from 'express';
import { QueryParam } from '../utils/types';

export const extractParamMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const extractStudi = (data: any): string[] => {
        return data ? data.split(',').map((k: string) => k.trim()).filter(Boolean) : [];
    };

    const extractHarga = (data: any): number[] => {
        return data ? data.split(',').map((k: string) => Number(k.trim())).filter(Boolean) : [];
    };

    const extractDurasi = (data: any): number[] => {
        return data ? data.split(',').map((k: string) => Number(k.trim())).filter(Boolean) : [];
    };

    const extractFilter = (data: any): string => {
        return data as string;
    };

    const queryParam: QueryParam = {
        studi: extractStudi(req.query.studi),
        harga: extractHarga(req.query.harga),
        durasi: extractDurasi(req.query.durasi),
        filter: extractFilter(req.query.filter),
        search: req.query.search as string,
    };
    console.log(queryParam)

    req.queryParam = queryParam;

    next();
};
