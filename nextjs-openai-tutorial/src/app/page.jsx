"use client";
import { useState } from "react";

const HomePage = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json()
    console.log(data);
  };

  return (
    <div className="bg-zinc-950 h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 block bg-neutral-700 text-white w-full rounded-md"
          type="text"
          placeholder="input prompt here"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="bg-green-500 p-2 rounded-md block mt-2 text-white">
          Generate
        </button>
      </form>
    </div>
  );
};

export default HomePage;
