"use client";
import Image from "next/image";

import { loginUser } from "../../_lib/actions";
export default function Login() {
  return (
    <div className="flex w-full h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      {/* Background Image (Visible on large screens) */}
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
        }}
      ></div>

      {/* Login Form */}
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <Image
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
            width={100}
            height={30}
            className="w-auto h-7 sm:h-8"
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <button className="flex items-center justify-center w-full mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <div className="px-4 py-2">
            {/* Google Icon */}
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              {/* SVG Path */}
            </svg>
          </div>
          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
            or login with email
          </span>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <form action={loginUser}>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email Address
            </label>
            <input
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Password
              </label>
              <a
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                href="#"
              >
                Forget Password?
              </a>
            </div>
            <input
              name="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <a
            href="#"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </a>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
}
