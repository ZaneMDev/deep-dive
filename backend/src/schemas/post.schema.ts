import { z } from 'zod';

export const PostSchema = z.object({
    groupPublicId: z
        .string()
        .trim()
        .length(12, 'Invalid group ID'),

    title: z
        .string()
        .trim()
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title cannot exceed 100 characters'),

    body: z
        .string()
        .trim()
        .max(1000, 'Body cannot exceed 1000 characters')
        .nullable()
        .optional(),
});

export type Post = z.infer<typeof PostSchema>;
