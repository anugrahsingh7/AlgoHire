import React from "react";
import { connectToDatabase, disconnectFromDatabase } from "./_lib/mongoDb";
import User from "./_models/User";

export default async function home() {
  return <div className="h-screen w-screen ">hello i am home</div>;
}
