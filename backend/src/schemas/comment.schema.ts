import { z } from 'zod';

export const CommentSchema = z.object({
    postPublicId: z.string().trim().length(12, 'Invalid post ID'),

    parentPublicId: z
        .string()
        .trim()
        .length(12, 'Invalid parent comment ID')
        .nullable()
        .optional(),

    content: z
        .string()
        .trim()
        .min(1, 'Comment cannot be empty')
        .max(1000, 'Comment cannot exceed 1000 characters'),
});

export type Comment = z.infer<typeof CommentSchema>;
