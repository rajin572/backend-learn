import { z } from 'zod';

// Full name validation schema
const fullNameSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
});

// Guardian validation schema
const guardianSchema = z.object({
  guardianName: z.string().min(1, 'Guardian name is required'),
  relationship: z.enum(['father', 'mother', 'sister', 'brother', 'other']),
  contactNumber: z.string().min(1, "Guardian's contact number is required"),
  address: z.string().min(1, "Guardian's address is required"),
});

// Student validation schema
export const studentSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  fullname: fullNameSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  email: z.string().email('Invalid email address'),
  contactNumber: z.string().min(1, 'Contact number is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().min(1, 'Present address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  guardian: guardianSchema,
  profileImage: z.string().url('Invalid profile image URL'),
});
