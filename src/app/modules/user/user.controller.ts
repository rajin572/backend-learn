import { Request, Response } from 'express';
import { UserService } from './user.service';
import { userSchema } from './user.validation';

const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const validateData = userSchema.parse(data);
    const result = await UserService.createUserIntoDB(validateData);

    res.status(200).json({
      success: true,
      message: 'Successfully Create The User',
      data: result,
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
    const result = await UserService.getUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully Get The User',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The User',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await UserService.getSingleUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Get The User',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed To Get The User',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const UserController = { createUser, getUser, getSingleUser };
