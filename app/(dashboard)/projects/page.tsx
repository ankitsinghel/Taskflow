import { createServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SignOutButton from "@/app/(dashboard)/projects/sign-out-button";

export default async function ProjectsPage() {
  const supabase = await createServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("Authenticated user:", user);

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome back, {user.email}
            </p>
          </div>
          <SignOutButton />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-600 dark:text-gray-400">
            Your projects will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
