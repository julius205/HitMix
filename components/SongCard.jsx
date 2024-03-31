import React from "react";
import SongCardFront from "../components/SongCardFront";
import SongCardBack from "../components/SongCardBack";

const SongCard = () => {
  return (
    <div className="song-card-container h-screen relative flex justify-center items-center bg-black">
      <div className="song-card h-[450px] w-[450px] transition-transform duration-[1500ms]">
        <SongCardFront />
        <SongCardBack />
      </div>
    </div>
  );
};

export default SongCard;
