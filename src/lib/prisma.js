/* Libs (Prisma, Auth, Validators, Constantes) */

import { PrismaClient } from '@prisma/client';
let prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
export default prisma;