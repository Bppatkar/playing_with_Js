import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 character'),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z.string().min(6, 'Password must be at least 6 character'),
});

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),

  password: z.string().min(6, 'password is required'),
});

export { registerSchema, loginSchema };
