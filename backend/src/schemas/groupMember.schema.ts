import { z } from 'zod';

export const GroupMemberSchema = z.object({
    groupPublicId: z.string().trim().length(12, 'Invalid group ID'),
});

export type GroupMember = z.infer<typeof GroupMemberSchema>;
