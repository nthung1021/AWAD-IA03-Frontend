import { z } from 'zod';

export const registerSchema = z.object({
  email: z.email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type RegisterForm = z.infer<typeof registerSchema>;
