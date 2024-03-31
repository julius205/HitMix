"use client";
import React, { useState } from "react";
import GenreList from "../../../components/GenreList";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useUserNameStore from "../../../lib/store";

const PlayScreen = () => {
  const [gameMode, setGameMode] = useState("singleplayer");
  const [multiplayerMode, setMultiplayerMode] = useState("local");
  const [playerCount, setPlayerCount] = useState(1);

  const { userName, setUserName } = useUserNameStore();

  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("genre");

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
  };

  const handleMultiplayerModeChange = (mode) => {
    setMultiplayerMode(mode);
  };

  const handlePlayerCountChange = (e) => {
    setPlayerCount(parseInt(e.target.value));
  };

  const handleStartGame = () => {
    router.push({
      pathname: "/game",
      query: { genre: selectedGenre },
      state: { userName: userName, gamemode: gameMode },
    });
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mt-20">Configure your game</h1>
        <div className="flex justify-center mt-8">
          <button
            className={`mx-2 py-2 px-4 rounded-full border-2 border-[#B51D93] w-44 text-xl ${
              gameMode === "singleplayer"
                ? "bg-[#B51D93] text-white"
                : "bg-[#181313] text-white"
            }`}
            onClick={() => handleGameModeChange("singleplayer")}
          >
            Singleplayer
          </button>
          <button
            className={`mx-2 py-2 px-4 rounded-full border-2 border-[#B51D93] w-44 text-xl ${
              gameMode === "multiplayer"
                ? "bg-[#B51D93] text-white"
                : "bg-[#181313] text-white"
            }`}
            onClick={() => handleGameModeChange("multiplayer")}
          >
            Multiplayer
          </button>
        </div>
        {gameMode === "singleplayer" && (
          <div className="userNameInput mt-12 ">
            <label htmlFor="userName" className="mr-5 text-lg font-medium">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-md px-2 py-1 text-lg bg-zinc-800 font-medium"
            ></input>
          </div>
        )}
        {gameMode === "multiplayer" && (
          <div className="mt-8">
            <div className="flex justify-center items-center mb-4">
              <input
                type="radio"
                id="local"
                name="multiplayerMode"
                value="local"
                checked={multiplayerMode === "local"}
                onChange={() => handleMultiplayerModeChange("local")}
                className="mr-2"
              />
              <label htmlFor="local">Local</label>
              <input
                type="radio"
                id="online"
                name="multiplayerMode"
                value="online"
                checked={multiplayerMode === "online"}
                onChange={() => handleMultiplayerModeChange("online")}
                className="ml-6 mr-2"
              />
              <label htmlFor="online">Online</label>
            </div>
            <div className="player-count-slider flex items-center justify-center mt-10">
              <label
                htmlFor="playerCount"
                className="flex justify-between mr-4"
              >
                Players:
              </label>
              <input
                type="range"
                id="playerCount"
                name="playerCount"
                min="1"
                max="5"
                value={playerCount}
                onChange={handlePlayerCountChange}
                className="w-full h-5 appearance-none rounded-full focus:outline-none overflow-hidden"
                style={{ background: "#181313" }}
              />
              <span className="ml-4">{playerCount}</span>
            </div>
          </div>
        )}
        <h1 className="mt-10 -mb-10 text-2xl font-medium">Select Genre</h1>
        <GenreList />
        <Link
          href={{
            pathname: "/game",
            query: { genre: selectedGenre, playerCount: playerCount },
          }}
        >
          Start Game
        </Link>
      </div>
    </div>
  );
};

export default PlayScreen;
