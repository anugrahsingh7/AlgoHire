import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  console.log("Middleware running ....");
  // Get the token from the request, using your NEXTAUTH_SECRET.
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;
  console.log(token);
  // Allow public routes (login page, static assets, etc.)
  if (pathname.startsWith("/auth/Login") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // If there's no token, redirect to login.
  if (!token) {
    return NextResponse.redirect(new URL("/auth/Login", req.url));
  }

  // Example: if you have admin-only routes, check a role property in the token.
  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // If all checks pass, allow the request.
  return NextResponse.next();
}

// Define the paths you want the middleware to run on.
export const config = {
  matcher: ["/:path*"], // Apply middleware to ALL routes, including "/"
};
