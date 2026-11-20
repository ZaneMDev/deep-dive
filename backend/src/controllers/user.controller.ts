import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { generateId } from '../utils/id';

export async function getUser(req: Request, res: Response) {
    const username = req.params.username as string;

    const foundUser = await prisma.user.findUnique({
        where: { username },
        omit: { id: true },
    });

    if (!foundUser) {
        return res
            .status(404)
            .send(
                `404 Not Found: Could not find a user with the username of "${username}".`,
            );
    }

    res.json(foundUser);
}
