import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  fullName: z.string().min(5, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password is required'),
});
