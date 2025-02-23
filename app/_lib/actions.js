"use server";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { connectToDatabase } from "./mongoDb";
import { auth, signIn } from "./auth";
import { redirect } from "next/navigation";
export async function registerUser(formData) {
  try {
    await connectToDatabase();
    const formValues = Object.fromEntries(formData);

    const { email, password, firstName, lastName } = formValues;

    const name = firstName + " " + lastName;
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
export async function loginUser(formData) {
  const formValues = Object.fromEntries(formData);

  const { email, password } = formValues;
  console.log(email, password);
  const result = await signIn("credentials", {
    redirect: false, // Prevent automatic redirects
    email,
    password,
  });
  console.log(result);

  redirect("/");

  return { success: true, message: "Login successful" };
}
