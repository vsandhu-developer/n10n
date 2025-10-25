import { requireAuth } from "@/lib/auth-utils";

export default async function Home() {
  await requireAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen"></div>
  );
}
