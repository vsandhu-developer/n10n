import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  users: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany();
  }),
  testAi: baseProcedure.mutation(async ({ ctx }) => {
    await inngest.send({ name: "execute.ai" });
    return { success: true, message: "Job Queued" };
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
