import React from "react";

// Images
import bts from "../assets/playlist/bts.jpeg";
import daily1 from "../assets/playlist/daily1.jpeg";
import daily2 from "../assets/playlist/daily2.jpeg";
import daily3 from "../assets/playlist/daily3.jpeg";
import daily4 from "../assets/playlist/daily4.jpeg";
import daily5 from "../assets/playlist/daily5.jpeg";

import HeaderBanner from "./HeaderBanner";

const Playlist = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-6">
      <HeaderBanner img={bts} play={true} songName={"BTS MIX"} />
      <HeaderBanner img={daily1} songName={"Daily 1 MIX"} />
      <HeaderBanner img={daily3} songName={"Daily 3 MIX"} />
      <HeaderBanner img={daily4} songName={"Daily 4 MIX"} />
      <HeaderBanner img={daily2} songName={"Daily 2 MIX"} />
      <HeaderBanner img={daily5} songName={"Daily 5 MIX"} />
    </div>
  );
};

export default Playlist;
