import { z } from 'zod';

export const GroupSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'Group name must be at least 3 characters')
        .max(25, 'Group name cannot exceed 25 characters'),

    description: z
        .string()
        .trim()
        .max(500, 'Description cannot exceed 500 characters')
        .nullable()
        .optional(),
});

export type Group = z.infer<typeof GroupSchema>;
