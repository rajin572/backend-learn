import { Student } from './student.interface';
import StudentModel from './student.model';

const getStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//* Create Student Into Database
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getStudentFromDB,
};
