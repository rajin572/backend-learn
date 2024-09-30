import { Schema, model } from 'mongoose';
import { FullName, Guardian, Student } from './student.interface';

const fullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  guardianName: { type: String, required: true },
  relationship: {
    type: String,
    enum: ['father', 'mother', 'sister', 'brother', 'other'],
    required: true,
  },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const studentScema = new Schema<Student>({
  id: { type: String, required: true },
  fullname: fullNameSchema,
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  profileImage: { type: String, required: true },
});

const StudentModel = model<Student>('Student', studentScema);
export default StudentModel;
