"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div
      className="w-screen min-h-max overflow-hidden"
      style={{ padding: "2rem", textAlign: "center" }}
    >
      <h1>INCORRECT EMAIL OR PASSWORD !</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
