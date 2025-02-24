// app/layout.js
"use client";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import Footer from "./_components/Footer";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hiddenRoutes = ["/auth/Login", "/auth/Signup"];

  return (
    <SessionProvider>
      <html lang="en">
        <body>
          {!hiddenRoutes.includes(pathname) && <Navbar />}
          <Sidebar />
          <main className="w-screen min-h-max overflow-hidden">{children}</main>
          {!hiddenRoutes.includes(pathname) && <Footer />}
        </body>
      </html>
    </SessionProvider>
  );
}
