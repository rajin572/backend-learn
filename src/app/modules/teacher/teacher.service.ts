import { Teacher } from './teacher.interface';
import TeacherModal from './teacher.modal';

const createTeacherIntoDB = async (teacher: Teacher) => {
  const isExist = await TeacherModal.findOne({ id: teacher.id });
  if (isExist) {
    throw new Error('User Allready Exist');
  } else {
    const result = await TeacherModal.create(teacher);
    return result;
  }
};

const getTeacherFromDB = async () => {
  const result = await TeacherModal.find();
  return result;
};

const getSingleTeacherFromDB = async (id: string) => {
  const result = await TeacherModal.findOne({ id });
  return result;
};

const updateTeacherIntoDB = async (id: string, teacher: Teacher) => {
  const isExist = await TeacherModal.findOne({ id });
  if (!isExist) {
    throw new Error('User not found');
  } else {
    const result = await TeacherModal.findOneAndUpdate({ id }, teacher, {
      new: true,
    });
    return result;
  }
};

const deleteTeacherFromDB = async (id: string) => {
  const isExist = await TeacherModal.findOne({ id });
  if (!isExist) {
    throw new Error('User not found');
  } else {
    const result = await TeacherModal.deleteOne({ id });
    return result;
  }
};

export const TeacherService = {
  createTeacherIntoDB,
  getTeacherFromDB,
  getSingleTeacherFromDB,
  updateTeacherIntoDB,
  deleteTeacherFromDB,
};
