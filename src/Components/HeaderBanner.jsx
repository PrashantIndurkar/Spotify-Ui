import React from "react";
// React Icons
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdOutlinePauseCircleFilled } from "react-icons/md";

const HeaderBanner = ({ img, play, songName }) => {
  return (
    <div className="flex items-center justify-between rounded-md  cursor-pointer group bg-[#2f343c] hover:bg-[#40464f] transition-all duration-300">
      <div className="flex items-center gap-x-4">
        <img
          src={img}
          className="h-20 w-20 rounded-tl-md rounded-bl-md "
          alt=""
        />
        <h1 className="font-bold">{songName}</h1>
      </div>
      {play ? (
        <MdOutlinePauseCircleFilled className=" group-hover:flex group-hover:transition duration-1000 h-12 w-12 text-green-500 mx-2 ease-linear shadow-2xl" />
      ) : (
        <BsFillPlayCircleFill className=" h-12 w-12  text-green-500  group-hover:opacity-100 opacity-0 hover:transition-all duration-300 ease-in shadow-2xl mx-2 " />
      )}
    </div>
  );
};

export default HeaderBanner;
