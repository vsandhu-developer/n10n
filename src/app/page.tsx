import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

export default async function Home() {
  await requireAuth();

  const data = await caller.users();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {JSON.stringify(data, null, 2)}
      <LogoutButton />
    </div>
  );
}
