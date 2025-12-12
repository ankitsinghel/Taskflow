"use client";

import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function LogOut() {
    const { error } = await createClient.auth.signOut();
    if (error) {
      console.error("Logout error:", error);
      return;
    }
    router.push("/login"); // redirect after logout
  }

  return (
    <div className="flex flex-col ">
      <Link href="/login">SignIN</Link>
      <button onClick={LogOut}>Logout</button>
    </div>
  );
}
