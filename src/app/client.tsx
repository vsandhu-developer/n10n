"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function ClientComponent() {
  const tRPC = useTRPC();
  const { data: users } = useSuspenseQuery(tRPC.users.queryOptions());
  return <div>{JSON.stringify(users)}</div>;
}
