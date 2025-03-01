"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { loginUser } from "../../_lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { ThemeProvider } from "@/app/Context/ThemeContext";
import { ThemeToggle } from "@/app/_components/ThemeToggle";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status } = useSession();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const result = await loginUser(formData);
    await getSession();

    if (result.success) {
      toast.success("Signed in successfully!");
      router.replace("/");
    } else {
      setError(result.message);
      toast.error("Invalid Email or Password");
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <ThemeProvider>
    <div className=" flex w-screen h-screen overflow-hiddenshadow-lg dark:bg-[#0f0f0f] justify-center  items-center bg-gray-100">
      <div
        className="hidden bg-cover lg:block lg:w-2/3">
         <img
                  className="w-full h-full object-cover"
                  src="/photo2.jpeg"
                  alt="AlgoHire"
                />
  

      </div>

      <div className="w-full  px-6 py-8 md:px-8 lg:w-1/3 dark:bg-[#0f0f0f]">
       

        <div className="flex justify-between mx-auto items-center " >
                <div className="flex items-center">
                <img
                  className="w-auto h-5 sm:h-6 me-1"
                  src="/AlogHireIcon-removebg-preview.png"
                  alt="AlgoHire"
                />
                <span className="text-2xl text-gray-800 dark:text-gray-200  font-semibold">AlgoHire</span>
                </div>

                <ThemeToggle/>
              </div>

        <p className="mt-4 text-xl text-left text-gray-600 dark:text-gray-300 ">
          WELCOME BACK !
        </p>

        {/* <button 
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full mt-2 dark:text-gray-200 text-gray-800 transition-colors duration-300 transform border border-gray-300  dark:border-gray-700 hover:shadow-sm rounded-lg  hover:bg-gray-900 "
        >
          <span className="w-5/6 px-4 py-3 flex justify-center items-center font-bold text-center">
          <FcGoogle className="me-1 text-2xl " /> Sign in with Google
          </span>
        </button> */}

        {/* <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
            or login with email
          </span>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div> */}

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email Address
            </label>
            <input
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium hover:shadow-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase dark:text-gray-400">
            or login with email
          </span>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

          <button 
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full mt-2 dark:text-gray-200 text-gray-800 transition-colors duration-300 transform border border-gray-300  dark:border-gray-700 hover:shadow-sm rounded-lg  hover:bg-gray-300 hover:dark:bg-gray-700 "
        >
          <span className="w-5/6 px-4 py-3 flex justify-center items-center font-bold text-center">
          <FcGoogle className="me-1 text-2xl " /> Sign in with Google
          </span>
        </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/7 border-b dark:border-gray-600 md:w-1/6"></span>
          <a
            href="/auth/Signup"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Don't have an account? Sign up
          </a>
          <span className="w-1/7 border-b dark:border-gray-600 md:w-1/6"></span>
        </div>


        
      </div>
    </div>
    </ThemeProvider>
  );
}
