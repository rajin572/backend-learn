import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getStudent);
router.post('/createStudent', StudentController.createStudent);

export const studentRoute = router;
