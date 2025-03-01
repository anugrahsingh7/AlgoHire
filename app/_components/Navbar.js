"use client"
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { ThemeProvider } from "../Context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { RiMenu2Fill } from "react-icons/ri";
import { useSidebar } from "../Context/SidebarContext";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsActive } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  // Remove the TypeScript type annotation (: string)
  const getButtonClass = (path) => 
    `px-3 py-2 mx-0 mt-2 text-gray-700 transition-colors cursor-pointer duration-300 transform rounded-md lg:mt-0 text-black dark:text-gray-300  ${
      pathname === path 
        ? 'bg-gray-200 dark:bg-gray-800' 
        : ''
    }`;

  return (
    <ThemeProvider>
      <nav className="relative flex items-center bg-white shadow-sm dark:bg-[#0f0f0f] border-b-gray-200 dark:border-b-gray-700 border-b">
        <div className="container px-6 py-2 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">

            <button 
    onClick={() => setIsActive(prev => !prev)} 
    className="me-2 text-2xl   shadow-sm hover:opacity-75  dark:text-gray-200 text-gray-800 cursor-pointer  rounded-full"
  >
    <RiMenu2Fill />
  </button>
            
                


              <button className="flex items-center cursor-pointer " onClick={() => router.push("/")}>
                <img
                  className="w-auto h-5 sm:h-6 me-1 ms-3"
                  src="/AlogHireIcon-removebg-preview.png"
                  alt="AlgoHire"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200 font-semibold">AlgoHire</span>
              </button>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-black dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-700 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <RiMenu4Line className="text-2xl" />
                  ) : (
                    <IoClose className="text-2xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center ">
                <button
                  onClick={() => router.push("/")}
                  className={getButtonClass("/")}
                >
                  Home
                </button>
                <button
                  onClick={() => router.push("/Subscription")}
                  className={getButtonClass("/Subscription")}
                >
                  Subscribe
                </button>
                <button
                  onClick={() => router.push("/Hire")}
                  className={getButtonClass("/Hire")}
                >
                  Get Hire
                </button>
                <button
                  onClick={() => router.push("/About")}
                  className={getButtonClass("/About")}
                >
                  About
                </button>
                <button
                  onClick={() => router.push("/Support")}
                  className={getButtonClass("/Support")}
                >
                  Support
                </button>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <ThemeToggle />

      </nav>
    </ThemeProvider>
  );
}