import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { clientPromise, connectToDatabase } from "./mongoDb";
import { getUserData } from "./data-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectToDatabase(); // Ensure MongoDB is connected

        if (!credentials.email || !credentials.password) {
          throw new Error("Missing email or password");
        }

        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Incorrect password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          skills: user.skills || [], // Include skills
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/Login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        await connectToDatabase();

        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            role: "user", // Default skills or other fields
            skills: ["React.js", "Next.js"], 
            provider: account.provider,
          });
        }
        await existingUser.save();
        token.id = existingUser._id.toString();
        token.skills = existingUser.skills || [];
        token.role = existingUser.role || "user";
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.skills = token.skills || [];
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
