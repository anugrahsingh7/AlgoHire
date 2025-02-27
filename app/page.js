import { auth } from "./_lib/auth";
import { ThemeProvider } from './Context/ThemeContext'; // Import the ThemeProvider
 // Import the ThemeToggle button

export default async function Home() {
  const session = await auth();

  return (
    <ThemeProvider>
      <div className="h-screen w-screen flex justify-center items-center text-xl bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
        {/* Theme Toggle Button */}
        

        {/* Your Existing Content */}
        {session ? (
          <span className="text-black dark:text-white">
            Hello, I am {session.user.name}
          </span>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-black dark:text-white">You are not logged in</div>
            <a
              className="text-orange-600 bg-orange-100 p-6 m-4 dark:bg-orange-900 dark:text-orange-200 rounded-lg transition-colors duration-300"
              href="auth/Login"
            >
              LOGIN
            </a>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}