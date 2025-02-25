"use server";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { connectToDatabase } from "./mongoDb";
import { signIn } from "./auth";
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
  try {
    const formValues = Object.fromEntries(formData);
    const { email, password } = formValues;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result || result.error) {
      throw new Error(result?.error || "Invalid email or password");
    }

    return { success: true, message: "Login successful" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}
