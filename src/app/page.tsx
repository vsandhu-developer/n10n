import { requireAuth } from "@/lib/auth-utils";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import ClientComponent from "./client";
import LogoutButton from "./logout";

export default async function Home() {
  await requireAuth();

  const data = await caller.users();

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getWorkflows.queryOptions());

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>{JSON.stringify(data)}</p>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientComponent />
      </HydrationBoundary>

      <LogoutButton />
    </div>
  );
}
