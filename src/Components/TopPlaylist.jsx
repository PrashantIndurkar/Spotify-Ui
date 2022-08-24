import React from "react";
import SongCard from "./SongCard";

import Got7 from "../assets/playlist/Got7MIx.jpeg";
import megaHits from "../assets/playlist/megaHits.jpeg";
import mood from "../assets/playlist/mood.jpeg";
import selena from "../assets/playlist/selena.jpeg";
import popRising from "../assets/playlist/popRising.jpeg";

const TopPlaylist = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Your Top Mix</h1>
        <p className="text-[#b3b3b3] mr-5 text-xs cursor-pointer font-medium hover:underline">
          SEE ALL
        </p>
      </div>

      <div className="grid gap-x-4 grid-cols-5 ">
        <SongCard
          img={Got7}
          songName={"GOT7 Mix"}
          songDetails={"this is GOT 7 MIX"}
        />
        <SongCard
          img={megaHits}
          songName={"Mega Hits"}
          songDetails={"This is Mega Hits Mix  "}
        />
        <SongCard
          img={popRising}
          songName={"Pop Rising"}
          songDetails={"This is Pop Rising "}
        />
        <SongCard
          img={selena}
          songName={"Selena Mix"}
          songDetails={"This is Selena Mix "}
        />
        <SongCard
          img={mood}
          songName={"Mood Mix"}
          songDetails={"This is Mood Mix "}
        />
      </div>
    </div>
  );
};

export default TopPlaylist;
