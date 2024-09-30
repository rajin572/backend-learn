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
  return result;
};

//* Create Student Into Database
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// //* Update Student Into Database
const updateStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.findOneAndUpdate(
    { id: student.id },
    student,
    { new: true },
  );
  return result;
};

//* Delete Student From Database

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.deleteOne({ id });
  return result;
};

export const StudentService = {
  getStudentFromDB,
  getSingleStudentFromDB,
  createStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
};
