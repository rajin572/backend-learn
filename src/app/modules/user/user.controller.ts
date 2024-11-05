import { Request, Response } from 'express';
import { UserService } from './user.service';
import { UserValidationSchema } from './user.validation';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const validateUser = UserValidationSchema.parse(user);
    const data = await UserService.createUserFromDB(validateUser);
    res.status(200).json({
      success: true,
      message: 'Successfully Create The User',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Create The User',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const data = await UserService.getUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully Get The User',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The User',
      error: error instanceof Error ? error.message : error,
    });
  }
};
const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await UserService.getUserByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Get The User',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The User',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const UserController = {
  createUser,
  getUser,
  getUserById,
};
