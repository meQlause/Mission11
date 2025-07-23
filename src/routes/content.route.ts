import { Router } from 'express';
import * as courseController from '../controllers/course.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { extractParamMiddleware } from '../middlewares/extractParam.middleware';

const router = Router();

router.get('/', courseController.getCourses);
router.get('/search', extractParamMiddleware, courseController.search);

router.post('/', authMiddleware, courseController.addCourse);

router.get('/:id', authMiddleware, courseController.getCourseById);
router.put('/:id', authMiddleware, courseController.editCourseById);
router.delete('/:id', authMiddleware, courseController.deleteCourseById);

export default router;
