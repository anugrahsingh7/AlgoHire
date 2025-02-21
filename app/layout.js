'use client'
import { usePathname } from "next/navigation";

import Footer from "./_components/Footer";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  // List of pages where Navbar and Footer should NOT be displayed
  const hiddenRoutes = ["/Login", "/Signup" ];

  return (
    <html lang="en">
      <body>
        {/* Render Navbar only if the current route is NOT in hiddenRoutes */}
        {!hiddenRoutes.includes(pathname) && <Navbar />}
        <Sidebar/>

        <main className="w-screen min-h-max overflow-hidden">{children}</main>

        {/* Render Footer only if the current route is NOT in hiddenRoutes */}
        {!hiddenRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
