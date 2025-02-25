import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

// 🔹 Ensure global caching to prevent multiple connections in Next.js
let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

// ✅ Mongoose Connection Function
export async function connectToDatabase() {
  if (cached.conn) {
    console.log("✅ Using existing Mongoose connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🛠️ Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => {
      console.log("🚀 Connected to MongoDB");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// ✅ Disconnect Function (Optional for cleanup)
export async function disconnectFromDatabase() {
  if (cached.conn) {
    console.log("⚠️ Disconnecting from MongoDB...");
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }
}

// 🔹 MongoDB Client for NextAuth (Only for NextAuth Adapter)
let clientPromise;

if (!globalThis._mongoClientPromise) {
  const client = new MongoClient(MONGODB_URI, {});
  globalThis._mongoClientPromise = client.connect();
}

clientPromise = globalThis._mongoClientPromise;

export { clientPromise }; // Use this for NextAuth Adapter
