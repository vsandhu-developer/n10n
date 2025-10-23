import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import ClientComponent from "./client";

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.users.queryOptions());

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading</p>}>
          <ClientComponent />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
