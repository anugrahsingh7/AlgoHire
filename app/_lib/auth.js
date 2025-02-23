import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { clientPromise, connectToDatabase } from "./mongoDb";

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
        console.log(credentials.email, credentials.password);

        const user = await User.findOne({ email: credentials.email });
        console.log("User from DB:", user);
        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Incorrect password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/Login", // Custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
});
