import { Request, Response } from 'express';
import { StudentService } from './student.service';

const getStudent = async (req: Request, res: Response) => {
  const result = await StudentService.getStudentFromDB();
  res.status(200).json({
    success: true,
    message: 'Successfully Get The Student',
    data: result,
  });
};
const createStudent = async (req: Request, res: Response) => {
  //* Catch the user request
  const student = req.body;

  //* Call Service Function to toi send data to database and return response
  const result = await StudentService.createStudentIntoDB(student);
  //* Send Response to the user
  res.status(200).json({
    success: true,
    message: 'Successfully Create The Student',
    data: result,
  });
};

export const StudentController = {
  createStudent,
  getStudent,
};
