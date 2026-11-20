import { customAlphabet } from 'nanoid';

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export const generateId = customAlphabet(BASE58, 12);
