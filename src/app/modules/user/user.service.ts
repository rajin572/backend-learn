import { TUser } from './user.interface';
import UserModal from './user.modal';

const createUserIntoDB = async (user: TUser) => {
  const isExist = await UserModal.findOne({ id: user.id });
  if (isExist) {
    throw new Error('User Allready Exist');
  } else {
    const data = await UserModal.create(user);
    return data;
  }
};

const getUserFromDB = async () => {
  const data = await UserModal.find();
  return data;
};
const getSingleUserFromDB = async (id: string) => {
  const data = await UserModal.findOne({ id });
  return data;
};

export const UserService = {
  createUserIntoDB,
  getUserFromDB,
  getSingleUserFromDB,
};
