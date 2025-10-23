import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  users: protectedProcedure.query((opts) => {
    return prisma.user.findMany();
  }),
});

export type AppRouter = typeof appRouter;
