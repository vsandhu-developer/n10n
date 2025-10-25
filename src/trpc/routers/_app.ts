import { workflowRouter } from "@/features/workflows/server/router";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  workflows: workflowRouter,
});

export type AppRouter = typeof appRouter;
