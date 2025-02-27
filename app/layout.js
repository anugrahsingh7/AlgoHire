import { SessionProvider } from "next-auth/react";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";
import "./globals.css";
import HiddenLayoutProvider from "./_components/HiddenLayoutProvider"; // Client component for hiding logic
import { auth } from "./_lib/auth";
import { getUserData } from "./_lib/data-service";
import { redirect } from "next/navigation";
export default async function RootLayout({ children }) {
  const session = await auth();

  const userData = await getUserData(session?.user.email);

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <HiddenLayoutProvider>
            <Navbar />
            <Sidebar userData={userData}/>
          </HiddenLayoutProvider>
          <main className="w-screen min-h-max overflow-hidden  bg-white dark:bg-gray-900 transition-colors duration-300">{children}</main>
          <HiddenLayoutProvider>
            <Footer />
          </HiddenLayoutProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
