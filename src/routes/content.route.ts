import { Router } from 'express';
import * as courseController from '../controllers/course.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, courseController.getCourses);
router.post('/', authMiddleware, courseController.addCourse);
router.get('/:id', authMiddleware, courseController.getCourseById);
router.put('/:id', authMiddleware, courseController.editCourseById);
router.delete('/:id', authMiddleware, courseController.deleteCourseById);

export default router;
