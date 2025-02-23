import Image from "next/image";
import { registerUser } from "../../_lib/actions";

export default function Signup() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        {/* Left Image Section */}
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=715&q=80')",
          }}
        ></div>

        {/* Right Form Section */}
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">
                Select type of account
              </h1>
              <div className="mt-3 md:flex md:items-center md:-mx-2">
                <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                  <span className="mx-2">Client</span>
                </button>

                <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                  <span className="mx-2">Worker</span>
                </button>
              </div>
            </div>

            {/* Form Section */}
            <form
              action={registerUser}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="John"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Snow"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="XXX-XX-XXXX-XXX"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="johnsnow@example.com"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Sign Up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
