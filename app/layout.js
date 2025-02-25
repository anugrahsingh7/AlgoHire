import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Footer from "./_components/Footer";
import HiddenLayoutProvider from "./_components/HiddenLayoutProvider"; // Client component for hiding logic
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import { auth } from "./_lib/auth";
import { getUserData } from "./_lib/data-service";
import "./globals.css";

export const metadata = {
  title: {
    default: "AlgoHire",
  },
  description: "A brief description of your app.",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  const userData = await getUserData(session?.user.email);

  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-center" autoClose={3000}/>
        <SessionProvider>
          <HiddenLayoutProvider>
            <Navbar />
            <Sidebar userData={userData}/>
          </HiddenLayoutProvider>

          <main className="w-screen min-h-max overflow-hidden">{children}</main>
          <HiddenLayoutProvider>
            <Footer />
          </HiddenLayoutProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
