import AppHeader from "@/components/app-header";
import { requireAuth } from "@/lib/auth-utils";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
