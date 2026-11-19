import { z } from 'zod';

export const UserSchema = z.object({
    email: z
        .email('Invalid email address')
        .trim()
        .toLowerCase()
        .max(255, 'Email cannot exceed 255 characters'),

    username: z
        .string()
        .trim()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username cannot exceed 20 characters')
        .regex(
            /^[a-zA-Z0-9_]+$/,
            'Usernames can only contain letters, numbers, and underscores',
        ),

    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(255, 'Password cannot exceed 255 characters'),

    bio: z
        .string()
        .trim()
        .max(200, 'Bio cannot exceed 200 characters')
        .nullable()
        .optional(),
});

export type User = z.infer<typeof UserSchema>;
