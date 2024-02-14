import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'] // Logs all queries to the console
})