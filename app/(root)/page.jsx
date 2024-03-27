import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-8">HitMix</h1>
        <p className="mb-10">
          Music Puzzle Game - Put the songs in the right order
        </p>
        <Link
          className="bg-[#552156] hover:bg-black px-5 py-3 rounded-2xl text-xl font-bold"
          href={"/play"}
        >
          PLAY NOW
        </Link>
      </div>
    </div>
  );
};

export default Home;
