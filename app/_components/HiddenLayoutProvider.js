"use client";

import { usePathname } from "next/navigation";

const hiddenRoutes = ["/auth/Login", "/auth/Signup", "/some-other-route"];

export default function HiddenLayoutProvider({ children }) {
  const pathname = usePathname();
  if (hiddenRoutes.includes(pathname)) return null;
  return children;
}
