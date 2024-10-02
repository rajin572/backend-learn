import { Request, Response } from 'express';
import { StudentService } from './student.service';

//* Get Student
const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully Get The Student',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The Student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

//* Get Single Student By Id
const getStudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentService.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Get The Student',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The Student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

// * Create Student
const createStudent = async (req: Request, res: Response) => {
  try {
    //* Catch the user request
    const { student } = req.body;

    //* Call Service Function to toi send data to database and return response
    const result = await StudentService.createStudentIntoDB(student);
    //* Send Response to the user
    res.status(200).json({
      success: true,
      message: 'Successfully Create The Student',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Create The Student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { student } = req.body;
    const result = await StudentService.updateStudentIntoDB(id, student);
    res.status(200).json({
      success: true,
      message: 'Successfully Update The Student',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Update The Student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

// * Delete Student
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentService.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Delete The Student',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Delete The Student',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const StudentController = {
  getStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
