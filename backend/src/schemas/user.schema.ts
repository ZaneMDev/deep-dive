import { z } from 'zod';

export const UserSchema = z.object({
    id: z.bigint().optional(),

    email: z
        .email({ message: 'Invalid email address' })
        .max(255, 'Email cannot exceed 255 characters')
        .trim()
        .toLowerCase(),

    username: z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(16, 'Username cannot exceed 16 characters')
        .trim()
        .regex(
            /^[a-zA-Z0-9_]+$/,
            'Usernames can only contain letters, numbers, and underscores'
        ),

    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(255, 'Password cannot exceed 255 characters'),

    bio: z
        .string()
        .max(160, 'Bio cannot exceed 160 characters')
        .trim()
        .nullable()
        .optional(),
});

export type User = z.infer<typeof UserSchema>;
