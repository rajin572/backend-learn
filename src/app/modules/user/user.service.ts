import { TUser } from './user.interface';
import UserModal from './user.modal';

const createUserFromDB = async (user: TUser) => {
  const result = await UserModal.create(user);
  return result;
};
const getUserFromDB = async () => {
  const data = await UserModal.find();
  return data;
};

const getUserByIdFromDB = async (id: string) => {
  const data = await UserModal.findOne({ id });
  return data;
};

export const UserService = {
  createUserFromDB,
  getUserFromDB,
  getUserByIdFromDB,
};
