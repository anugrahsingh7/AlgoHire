import User from "../_models/User";
import { connectToDatabase } from "./mongoDb";

export async function getUserData(email) {
  
  await connectToDatabase();
  const user = await User.findOne({ email }).select("-password -__v").lean();

  if (!user) return null;

  return JSON.parse(JSON.stringify(user));
}
