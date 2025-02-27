'use client'; // Mark as a Client Component
import { useTheme } from '../Context/ThemeContext';
import { GiNightSleep } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" p-2 rounded-full h-1/2 me-5 -ms-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {isDarkMode ? <IoSunnySharp className='text-yellow-500' /> : <GiNightSleep className='text-black' />}
    </button>
  );
};