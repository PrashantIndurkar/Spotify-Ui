import React from "react";
import SongCard from "./SongCard";
import bts from "../assets/playlist/bts.jpeg";
import daily1 from "../assets/playlist/daily1.jpeg";
import allOut from "../assets/playlist/allOut.jpeg";
import blackpink2 from "../assets/playlist/blackpink2.jpeg";
import chilHits from "../assets/playlist/chilHits.jpeg";

const RecentlyPlayed = () => {
  return (
    <div className="flex flex-col flex-nowrap shrink-0">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">RecentlyPlayed</h1>
        <p className="text-[#b3b3b3] text-xs mr-5 cursor-pointer font-medium hover:underline">
          SEE ALL
        </p>
      </div>

      <div className="grid grid-cols-5 ">
        <SongCard img={bts} songName={"bts"} songDetails={"this is bts "} />
        <SongCard
          img={daily1}
          songName={"Daily Mix 1"}
          songDetails={"This is Daily Mix  "}
        />
        <SongCard
          img={chilHits}
          songName={"Chill Hits"}
          songDetails={"This is Chill Hits "}
        />
        <SongCard
          img={blackpink2}
          songName={"BLACKPINK"}
          songDetails={"This is BLACKPINK "}
        />
        <SongCard
          img={allOut}
          songName={"All Out"}
          songDetails={"This is All Out "}
        />
      </div>
    </div>
  );
};

export default RecentlyPlayed;
