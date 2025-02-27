import { auth } from "./_lib/auth";
import { ThemeProvider } from './Context/ThemeContext'; // Import the ThemeProvider
 // Import the ThemeToggle button

export default async function Home() {
  const session = await auth();

  return (
    <ThemeProvider>
      <div className="h-screen w-screen flex justify-center items-center text-xl text-black dark:text-white bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
       i am home
       </div>
    </ThemeProvider>
  );
}