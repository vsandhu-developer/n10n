import prisma from "@/lib/db";
import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from "@/trpc/init";
import { generateSlug } from "random-word-slugs";
import z from "zod";

export const workflowRouter = createTRPCRouter({
  create: premiumProcedure.mutation(({ ctx }) => {
    return prisma.workFlow.create({
      data: {
        name: generateSlug(6),
        userId: ctx.auth.user.id,
      },
    });
  }),

  remove: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return prisma.workFlow.delete({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });
    }),

  updateName: protectedProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return prisma.workFlow.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      });
    }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return prisma.workFlow.findMany({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });
    }),

  getMany: protectedProcedure.query(({ ctx }) => {
    return prisma.workFlow.findMany({
      where: {
        userId: ctx.auth.user.id,
      },
    });
  }),
});
