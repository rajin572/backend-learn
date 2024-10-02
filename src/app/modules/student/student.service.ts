import { Student } from './student.interface';
import StudentModel from './student.model';

//* Get Student From Database
const getStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//* Get Single Student From Database
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  if (!result) {
    throw new Error('User not found');
  } else {
    return result;
  }
};

//* Create Student Into Database
const createStudentIntoDB = async (student: Student) => {
  const isExist = await StudentModel.findOne({ id: student.id });
  if (isExist) {
    throw new Error('User Allready Exist');
  } else {
    const result = await StudentModel.create(student);
    return result;
  }
};

// //* Update Student Into Database
const updateStudentIntoDB = async (id: string, student: Student) => {
  const isExist = await StudentModel.findOne({ id });
  if (!isExist) {
    throw new Error('User not found');
  } else {
    const result = await StudentModel.findOneAndUpdate({ id }, student, {
      new: true,
    });
    return result;
  }
};

//* Delete Student From Database

const deleteStudentFromDB = async (id: string) => {
  const isExist = await StudentModel.findOne({ id });
  if (!isExist) {
    throw new Error('User not found');
  } else {
    const result = await StudentModel.deleteOne({ id });
    return result;
  }
};

export const StudentService = {
  getStudentFromDB,
  getSingleStudentFromDB,
  createStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
};
