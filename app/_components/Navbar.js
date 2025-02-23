"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push("/")}>
              <img
                className="w-auto h-6 sm:h-7"
                src="https://merakiui.com/images/full-logo.svg"
                alt=""
              />
            </button>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {/* Hamburger icon */}
                {!isOpen ? (
                  <RiMenu4Line className="text-2xl" />
                ) : (
                  <IoClose className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col  lg:flex-row lg:items-center ">
              <button
                onClick={() => router.push("/")}
                className="px-3 py-2 mx-0 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => router.push("/Subscription")}
                className="px-3 py-2 mx-0 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Subscribe
              </button>
              <button
                onClick={() => router.push("/Hire")}
                className="px-3 py-2 mx-0 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Get Hire
              </button>
              <button
                onClick={() => router.push("/About")}
                className="px-3 py-2 mx-0 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About
              </button>
              <button
                onClick={() => router.push("/Support")}
                className="px-3 py-2 mx-0 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
    </nav>
  );
}
