import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import ClientComponent from "./client";
import LogoutButton from "./logout";

export default async function Home() {
  await requireAuth();

  const data = await caller.users();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>{JSON.stringify(data)}</p>

      <ClientComponent />

      <LogoutButton />
    </div>
  );
}
