import { Router } from 'express';
import courseRoutes from './content.route';
import userRoutes from './user.route';

const router = Router();

router.use('/course', courseRoutes);
router.use('/user', userRoutes);

export default router;
