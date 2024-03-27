import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen relative ">
      {/* Lilane Hintergrundebene */}
      <div className="absolute items-center justify-center bg-purple-700 opacity-30 z-[-1] blur-[200px] w-1/2 h-1/2" ></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-8xl font-bold mb-5">HitMix</h1>
        <p className="mb-10 text-lg">
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
