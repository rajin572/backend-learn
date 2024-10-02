import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getStudent);
router.get('/:id', StudentController.getStudentById);
router.post('/createStudent', StudentController.createStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

export const studentRoute = router;
