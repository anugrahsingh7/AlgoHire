"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User is authenticated:", session?.user);
    } else if (status === "unauthenticated") {
      router.replace("/auth/Login"); // Using replace to avoid back navigation to this page
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <div className="h-screen w-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center text-xl">
      {session ? `Hello, I am ${session.user.name}` : "Redirecting..."}
    </div>
  );
}
