"use client";
import React, { useEffect } from "react";
import useUserNameStore from "../../../lib/store";
import { useSearchParams } from "next/navigation";
import SongCard from "../../../components/SongCard";

const GameScreen = () => {
  const { userName, setUserName } = useUserNameStore();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const playerCount = searchParams.get("playerCount");

  return (
    <div className="h-full game-screen flex flex-wrap overflow-hidden">
      <div className="bg-red-500 w-1/2 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-1/2 lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
        {userName}'s Songlist Genre: {genre}
        Spieler: {playerCount}
        <SongCard />
      </div>
      <div className="bg-white w-1/2 px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-1/2 lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
        Test
      </div>
    </div>
  );
};

export default GameScreen;
