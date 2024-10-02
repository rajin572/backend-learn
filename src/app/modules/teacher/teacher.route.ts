import express from 'express';
import { TeacherController } from './teacher.controller';

const route = express.Router();

route.post('/createTeacher', TeacherController.createTeacher);
route.get('/', TeacherController.getTeacher);
route.get('/:id', TeacherController.getSingleTeacher);
route.patch('/:id', TeacherController.updateTeacher);
route.delete('/:id', TeacherController.deleteTeacher);

export const TeacherRoute = route;
