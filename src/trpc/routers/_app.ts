import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  users: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany();
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workFlow.findMany();
  }),
  createWorkflows: protectedProcedure.mutation(async ({ ctx }) => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "vinay@mihuworld.com",
      },
    });

    return { success: true, message: "Job Queued" };
  }),
});

export type AppRouter = typeof appRouter;
