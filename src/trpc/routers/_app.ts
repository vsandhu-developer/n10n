import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  users: baseProcedure.query((opts) => {
    return prisma.user.findMany();
  }),
});

export type AppRouter = typeof appRouter;
