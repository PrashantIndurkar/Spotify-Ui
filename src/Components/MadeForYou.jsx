import React from "react";
import SongCard from "./SongCard";

import daily1 from "../assets/playlist/daily1.jpeg";
import daily2 from "../assets/playlist/daily2.jpeg";
import daily5 from "../assets/playlist/daily5.jpeg";
import daily4 from "../assets/playlist/daily4.jpeg";
import daily3 from "../assets/playlist/daily3.jpeg";

const MadeForYou = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Made For You</h1>
        <p className="text-[#b3b3b3] text-xs mr-5 cursor-pointer font-medium hover:underline">
          SEE ALL
        </p>
      </div>

      <div className="grid grid-cols-5">
        <SongCard
          img={daily1}
          songName={"GOT7 Mix"}
          songDetails={"Lauv, PACIFIC and more"}
        />
        <SongCard
          img={daily2}
          songName={"Mega Hits"}
          songDetails={"Rritam, A.R. and more"}
        />
        <SongCard
          img={daily4}
          songName={"Pop Rising"}
          songDetails={"Red Velvet, and more "}
        />
        <SongCard
          img={daily5}
          songName={"Selena Mix"}
          songDetails={"Stray Kids, and more "}
        />
        <SongCard
          img={daily3}
          songName={"Mood Mix"}
          songDetails={"This is Mood Mix "}
        />
      </div>
    </div>
  );
};

export default MadeForYou;
