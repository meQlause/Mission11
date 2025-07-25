import { Router } from 'express';
import * as uploadController from '../controllers/upload.controller';
import { upload } from '../middlewares/multer.middleware';

const router = Router();

router.post('/upload', upload.single("file"), uploadController.upload);
router.get('/image/:filename', uploadController.image);

export default router;
