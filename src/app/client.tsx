"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { toast } from "sonner";

export default function ClientComponent() {
  const tRPC = useTRPC();
  const queryClient = useQueryClient();
  const { data: workflows } = useSuspenseQuery(
    tRPC.getWorkflows.queryOptions()
  );

  const testAi = useMutation(
    tRPC.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("Ai Job Queued", {
          richColors: true,
        });
      },
    })
  );

  const create = useMutation(
    tRPC.createWorkflows.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(tRPC.getWorkflows.queryOptions());
      },
    })
  );

  return (
    <div>
      <div>{JSON.stringify(workflows, null, 2)}</div>

      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test Ai
      </Button>

      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
    </div>
  );
}
