import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const SongCard = ({ img, songDetails, songName }) => {
  return (
    <div className="bg-[#181818] rounded-md cursor-pointer hover:bg-[#353535] transition duration-150 w-fit px-3 py-3 mt-4 relative group">
      <img src={img} className="h-40 w-40  rounded-md " alt="" />
      <BsFillPlayCircleFill className="absolute h-12 w-12 right-4 bottom-20 text-green-500  group-hover:opacity-100 opacity-0 hover:transition-all duration-300 ease-in shadow-xl" />
      <h1 className="mt-4 text-sm font-bold ">{songName}</h1>
      <p className="text-[#b3b3b3] text-xs mt-1 text-ellipsis">{songDetails}</p>
    </div>
  );
};

export default SongCard;
