'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Footer from "./_components/Footer";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname(); 
  const hiddenRoutes = ["/Login", "/Signup"];

  const [userData, setUserData] = useState(null);

  // Fetch user data from user.json
  

  return (
    <html lang="en">
      <body>
        {!hiddenRoutes.includes(pathname) && <Navbar />}
        <Sidebar /> {/* Pass user data to Sidebar */}
        <main className="w-screen min-h-max overflow-hidden">{children}</main>
        {!hiddenRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
