import { Request, Response } from 'express';
import { TeacherService } from './teacher.service';

const createTeacher = async (req: Request, res: Response) => {
  try {
    const { teacher } = req.body;

    const result = await TeacherService.createTeacherIntoDB(teacher);

    res.status(200).json({
      success: true,
      message: 'Successfully Create The Teacher',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Create The Teacher',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const getTeacher = async (req: Request, res: Response) => {
  try {
    const result = await TeacherService.getTeacherFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully Get The Teacher',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The Teacher',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const getSingleTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await TeacherService.getSingleTeacherFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Get The Teacher',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The Teacher',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const updateTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { teacher } = req.body;

  try {
    const result = await TeacherService.updateTeacherIntoDB(id, teacher);
    res.status(200).json({
      success: true,
      message: 'Successfully Update The Teacher',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Update The Teacher',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await TeacherService.deleteTeacherFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Delete The Teacher',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Delete The Teacher',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const TeacherController = {
  createTeacher,
  getTeacher,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
};
