import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoute } from './app/modules/student/student.route';
import { TeacherRoute } from './app/modules/teacher/teacher.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('My Practice Project');
});

app.use('/api/v1/students', studentRoute);
app.use('/api/v1/teachers', TeacherRoute);

export default app;
