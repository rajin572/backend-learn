import { model, Schema } from 'mongoose';
import { FullName, Teacher } from './teacher.interface';

const fullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const teacherSchema = new Schema<Teacher>({
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
  profileImage: { type: String, required: true },
  isActive: { type: String, enum: ['active', 'inactive'], required: true },
});

const TeacherModal = model<Teacher>('Teacher', teacherSchema);
export default TeacherModal;
