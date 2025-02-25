import { auth } from "./_lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="h-screen w-screen flex justify-center items-center text-xl">
      {session ? (
        `Hello, I am ${session.user.name}`
      ) : (
        <div className="flex flex-col items-center">
          <div>You are not logged in</div>
          <a
            className="text-orange-600 bg-orange-100 p-6 m-4 "
            href="auth/Login"
          >
            LOGIN
          </a>
        </div>
      )}
    </div>
  );
}
