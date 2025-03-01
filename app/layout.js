import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Footer from "./_components/Footer";
import HiddenLayoutProvider from "./_components/HiddenLayoutProvider"; // Client component for hiding logic
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import { auth } from "./_lib/auth";
import { getUserData } from "./_lib/data-service";
import { SidebarProvider } from "./Context/SidebarContext";
import "./globals.css";

export const metadata = {
  title: {
    default: "AlgoHire - AI-Powered Developer Hiring & Assessment Platform",
  },
  description: "AlgoHire is an AI-powered developer hiring and assessment platform that helps companies streamline their recruitment process. It dynamically generates technical and problem-solving questions based on job roles, evaluates coding challenges in real time, and provides detailed candidate performance reports. With features like AI-driven question generation, real-time coding assessments, automated reports, and integrated video interviews, AlgoHire ensures companies can efficiently identify and hire top tech talent.",
  icons: {
    icon: "/AlogHireIcon-removebg-preview.png", // Path to your favicon
  },
};

export default async function RootLayout({ children }) {
  const session = await auth();

  const userData = await getUserData(session?.user.email);

  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-center" autoClose={3000}/>
        <SessionProvider>
  <SidebarProvider>
    <HiddenLayoutProvider>
      <Navbar />
      <Sidebar userData={userData}/>
    </HiddenLayoutProvider>
    <main className="w-screen min-h-max overflow-hidden  bg-white dark:bg-gray-900 transition-colors duration-300">{children}</main>
    <HiddenLayoutProvider>
      <Footer />
    </HiddenLayoutProvider>
  </SidebarProvider>
</SessionProvider>
      </body>
    </html>
  );
}
