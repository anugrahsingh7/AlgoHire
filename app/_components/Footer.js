'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const [email, setEmail] = useState('');
  const router = useRouter(); // Initialize useRouter

  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-[#0f0f0f] border-t-gray-200 dark:border-t-gray-700 border-t"  >
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Join 31,000+ others and never miss <br /> out on new tips, tutorials, and more.
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 text-sm  text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <button onClick={() => router.push('/')}>
            <Image className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" width={120} height={28} />
          </button>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <button onClick={() => router.push('/')} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                Home
              </button>
              <button onClick={() => router.push('/Subscription')} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                Subscribe
              </button>
              <button onClick={() => router.push('/Hire')} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                Get Hire
              </button>
              <button onClick={() => router.push('/About')} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                About
              </button>
              <button onClick={() => router.push('/Support')} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
