"use client";
import Image from "next/image";
import { registerUser } from "../../_lib/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/app/Context/ThemeContext";
import { ThemeToggle } from "@/app/_components/ThemeToggle";


export default function Signup() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await registerUser(formData);

    if (result.success) {
      toast.success("Account created successfully!",{ autoClose: 1500 });
      redirect("/auth/Login");
    } else {
      toast.error(result.message || "Signup failed. Please try again.");
    }
  }

  return (
    <ThemeProvider>
    <section className="bg-gray-100 dark:bg-[#0f0f0f] ">
      <div className="flex justify-center min-h-screen">
     
        <div
          className="hidden bg-cover lg:block lg:w-2/5">
          <img
          className="w-full h-full object-cover"
          src="/photo2.jpeg"
          alt="AlgoHire"
        />
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 dark:bg-[#0f0f0f]">
        
          <div className="w-full">
            
           <div className="flex justify-between items-center mb-2">
           <div className="flex  items-center  " >
                <img
                  className="w-auto h-6 sm:h-7 me-1"
                  src="/AlogHireIcon-removebg-preview.png"
                  alt="AlgoHire"
                />
                <span className="text-3xl text-gray-800 dark:text-gray-200  font-semibold">AlgoHire</span>
              </div>
            
            <ThemeToggle/></div>
         
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-gray-200">
              Get your free account now.
            </h1>
            <p className=" text-gray-600 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <label className="block mb-1 text-sm text-gray-700 dark:text-gray-200">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="input-field px-3 py-1 rounded-md dark:bg-gray-800 border placeholder:text-sm text-md bg-gray-200 border-gray-300 dark:text-gray-200 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="input-field px-3 py-1 rounded-md dark:bg-gray-800 border placeholder:text-sm text-md bg-gray-200 border-gray-300 dark:text-gray-200 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Enter your mobile no."
                  className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none input-field px-3 py-1 rounded-md dark:bg-gray-800 border placeholder:text-sm text-md bg-gray-200 border-gray-300 dark:text-gray-200 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email id"
                  className="input-field px-3 py-1 rounded-md dark:bg-gray-800 border placeholder:text-sm text-md bg-gray-200 border-gray-300 dark:text-gray-200 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input-field px-3 py-1 rounded-md dark:bg-gray-800 border placeholder:text-sm text-md bg-gray-200 border-gray-300 dark:text-gray-200 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your password"
                  className="input-field px-3 py-1 rounded-md dark:bg-gray-800 border placeholder:text-sm text-md bg-gray-200 border-gray-300 dark:text-gray-200 dark:border-gray-600"
                />
              </div>

              <button className="flex items-center justify-center w-1/3 px-2 py-2 text-md font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Sign Up</span>
              </button>
            </form>
            <div className="flex items-center justify-between mt-4">
          <span className="w-1/4 border-b dark:border-gray-600 md:w-1/4"></span>
          <a
            href="/auth/Login"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Already have an account? Log In
          </a>
          <span className="w-1/4 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
          </div>
        </div>
      </div>
    </section>
    </ThemeProvider>
  );
}
