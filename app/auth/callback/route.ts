import { NextResponse } from "next/server";
import { createServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/projects";

  if (code) {
    const supabase = await createServer();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Error exchanging code for session:", error);
      return NextResponse.redirect(
        new URL("/login?error=auth_failed", requestUrl.origin)
      );
    }
  }

  // Redirect to the specified next URL or default to projects page
  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
