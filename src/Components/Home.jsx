import React from "react";

// Spotify Logo
import spotifyLogo from "../assets/Spotify_Logo_RGB_White.png";
import likedIcon from "../assets/like.png";

// Profile Spotify
import prashantProfile from "../assets/prashant.jpg";

import Nanana from "../assets/playlist/songNANANA.jpeg";

// Icons From REACT-ICONS
import { AiFillHome } from "react-icons/ai";
import { FiAlignRight, FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { BsFillPlusSquareFill, BsBookmarkFill } from "react-icons/bs";
import { IoChevronDown, IoPersonCircle } from "react-icons/io5";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { TbVolume } from "react-icons/tb";

import Playlist from "./Playlist";
import RecentlyPlayed from "./RecentlyPlayed";
import TopPlaylist from "./TopPlaylist";
import MadeForYou from "./MadeForYou";

import { MdPersonAddAlt } from "react-icons/md";

import { BsSuitHeart, BsPhone } from "react-icons/bs";
import { TiArrowShuffle } from "react-icons/ti";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IoRepeat } from "react-icons/io5";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import { MdPlaylistPlay } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen flex flex-col text-white overflow-hidden">
      <div className="flex-1 h-fit flex overflow-y-hidden scrollbar-track-green-500 scrollbar-thumb-green-900">
        {/* ================== SideBar ======================= */}
        <div className="bg-gray-700 w-56 flex flex-col justify-between h-full overflow-y-hidden ">
          <div className="bg-black ">
            <div className="p-5">
              <img src={spotifyLogo} className="h-10 cursor-pointer" alt="" />
              <ul className="mt-8 space-y-4">
                <li className="text-sm text-[#b3b3b3] font-semibold cursor-pointer hover:text-white transition duration-150">
                  <AiFillHome className="inline h-6 w-6 text-[#b3b3b3] mr-3" />{" "}
                  Home
                </li>
                <li className="text-sm text-[#b3b3b3] font-semibold cursor-pointer hover:text-white transition duration-150">
                  <FiSearch className="inline h-6 w-6 text-[#b3b3b3] mr-3" />{" "}
                  Search
                </li>
                <li className="text-sm text-[#b3b3b3] font-semibold cursor-pointer hover:text-white transition duration-150">
                  <BiLibrary className="inline h-6 w-6 text-[#b3b3b3] mr-3" />{" "}
                  Your Library
                </li>
              </ul>

              <ul className="mt-8 space-y-4">
                <li className="text-sm text-[#b3b3b3] font-semibold cursor-pointer hover:text-white transition duration-150">
                  <BsFillPlusSquareFill className="inline  h-6 w-6 text-[#b3b3b3] mr-3" />{" "}
                  Create Playlist
                </li>
                <li className="text-sm text-[#b3b3b3] font-semibold cursor-pointer hover:text-white transition duration-150">
                  <img
                    src={likedIcon}
                    className="inline rounded-sm h-6 w-6 text-[#b3b3b3] mr-3"
                  />{" "}
                  Linked Songs
                </li>
                <li className="text-sm text-[#b3b3b3] font-semibold cursor-pointer hover:text-white transition duration-150 group">
                  <div className="bg-[#004537] rounded-sm group-hover:bg-[#035343] inline mr-3 py-0.5 px-1.5">
                    <BsBookmarkFill className="inline h-3 w-3 text-[#1ed760] " />
                  </div>{" "}
                  Your Episodes
                </li>
                <p className="border-b pt-1 border-[#282828]"></p>
              </ul>
            </div>
          </div>
          <div className="bg-black h-full overflow-y-auto px-5 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-black">
            <ul className="space-y-3 text-[#b3b3b3] ">
              <li className="hover:text-white text-sm">
                <a href="">My Playlist #3</a>
              </li>
              <li className="hover:text-white  text-sm flex items-center justify-between">
                <a href="">BTS MIX</a>
                <TbVolume className="h-4 w-4 mr-2 text-green-500 cursor-pointer " />
              </li>
              <li className="hover:text-white text-sm">
                <a href="">BLACKPINK</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Spotify Wrapped 2022</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Russia – One Year Anniversary</a>
              </li>

              <li className="hover:text-white text-sm">
                <a href="">TOMORROW X TOGETHER</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">GOTY7</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">ITZY</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Southeast Asia</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Sub-Saharan Africa</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Bts</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Stream On – HiFi</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">Stream On – Halsey</a>
              </li>
              <li className="hover:text-white text-sm">
                <a href="">K-Pop Wave</a>
              </li>
            </ul>
          </div>
          <div className="py-2 flex items-center gap-x-4 px-4 group bg-black cursor-pointer hover:text-white transition duration-150 group text-[#b3b3b3]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>{" "}
            <a
              href="#"
              className="text-sm font-semibold group-hover:text-white"
            >
              Install App
            </a>
          </div>
        </div>
        {/*======================= Main Content =======================*/}
        <div className="bg-[#121212] flex-1 overflow-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-700  ">
          <div>
            <nav className="flex justify-between items-center px-4 py-8 h-12 bg-gradient-to-b from-gray-700">
              <div className="flex gap-x-4 cursor-pointer">
                <FiChevronLeft className="h-8 w-8" />
                <FiChevronRight className="h-8 w-8" />
              </div>
              <div className="flex gap-x-4">
                <button className="border rounded-full px-2 border-gray-5 00 text-sm font-medium hover:bg-black hover:scale-105 transition duration-150">
                  upgrade
                </button>
                <div className="flex bg-[#090c13] rounded-full px-1 py-1 items-center align-middle cursor-pointer">
                  <img
                    src={prashantProfile}
                    className="h-6 w-6 rounded-full mr-2"
                    alt=""
                  />
                  <h1 className="text-xs font-medium mr-1">
                    Prashant Indurkar
                  </h1>
                  <IoChevronDown />
                </div>
              </div>
            </nav>
          </div>
          <div className="px-6 py-4 flex-none">
            <h1 className="font-bold text-3xl">Good Morning</h1>
            <div>
              <Playlist />
            </div>
            <div className="mt-10 flex flex-col gap-y-12">
              <RecentlyPlayed />
              <TopPlaylist />
              <MadeForYou />
            </div>
          </div>
        </div>
        {/*======================= FRIEND SECTION =======================*/}
        <div className="hidden lg:flex flex-col bg-black w-56 overflow-auto scrollbar-hide p-2">
          <div className="flex items-center justify-between mb-6 text-[#b3b3b3]">
            <h1 className="font-semibold text-sm">Friend Activity</h1>
            <MdPersonAddAlt className="w-5 h-5" />
          </div>
          <p className="text-xs mt-12 text-[#b3b3b3]">
            Let friends and followers on Spotify see what you're listening to.
          </p>
          <div className="mt-8 flex items-center">
            <IoPersonCircle className="h-12 w-12 text-[#656565b7]" />
            <div className="space-y-1 ml-1 ">
              <p className="  border-b-8 flex-1 w-20 rounded-full border-[#656565b7]"></p>
              <p className=" border-b-8 flex-1 w-16 rounded-full border-[#656565b7]"></p>
              <p className=" border-b-8 flex-1 w-10 rounded-full border-[#656565b7]"></p>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <IoPersonCircle className="h-12 w-12 text-[#656565b7]" />
            <div className="space-y-1 ml-1 ">
              <p className="  border-b-8 flex-1 w-20 rounded-full border-[#656565b7]"></p>
              <p className=" border-b-8 flex-1 w-16 rounded-full border-[#656565b7]"></p>
              <p className=" border-b-8 flex-1 w-10 rounded-full border-[#656565b7]"></p>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <IoPersonCircle className="h-12 w-12 text-[#656565b7]" />
            <div className="space-y-1 ml-1 ">
              <p className="  border-b-8 flex-1 w-20 rounded-full border-[#656565b7]"></p>
              <p className=" border-b-8 flex-1 w-16 rounded-full border-[#656565b7]"></p>
              <p className=" border-b-8 flex-1 w-10 rounded-full border-[#656565b7]"></p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <p className="text-[#b3b3b3] mt-4 text-xs">
              Go to Settings > Social and enable 'Share my listening activity on
              Spotify.' You can turn this off at any time.
            </p>
            <button className="mt-4 bg-white tracking-wider text-black hover:scale-105 w-fit  text-xs font-medium rounded-full px-6 py-2">
              SETTINGS
            </button>
          </div>
        </div>
      </div>
      {/*======================= Song Play =======================*/}
      <div className="bg-[#181818] h-24">
        <div className="mx-4 flex items-center justify-between h-full">
          <div className="flex items-center gap-x-4">
            <img src={Nanana} alt="" className="h-14 w-14 cursor-pointer" />
            <div>
              <h1 className="hover:underline cursor-pointer">NANANA</h1>
              <span className="text-xs text-[#b3b3b3] hover:underline cursor-pointer">
                GOT7
              </span>
            </div>
            <BsSuitHeart className="ml-5 text-[#b3b3b3 ] hover:text-white  cursor-pointer" />
          </div>
          <div className="flex flex-1 items-center flex-col">
            <div className="flex items-center gap-x-3">
              <TiArrowShuffle className="h-6 w-6 text-green-500  hover:text-green-300  " />
              <BiSkipPrevious className="h-8 w-8 text-[#b3b3b3] hover:text-white" />
              <MdOutlinePauseCircleFilled className="h-10 w-10   hover:scale-105" />
              <BiSkipNext className="h-8 w-8 text-[#b3b3b3] hover:text-white" />
              <IoRepeat className="h-6 w-6  text-green-500  hover:text-green-300" />
            </div>
            <div className="flex w-1/2 mt-2 items-center gap-x-2 justify-center flex-row">
              <p className="text-xs text-[#b3b3b3]">1:25</p>
              {/* Progress Bar */}
              <div class="w-1/2 cursor-pointer rounded-full group h-1 bg-[#5d5d5d]">
                <div class="bg-white h-1 rounded-full  group-hover:bg-green-600 w-1/2"></div>
              </div>
              <p className="text-xs text-[#b3b3b3]">3:04</p>
            </div>
          </div>
          <div className="flex items-center  gap-x-3 ">
            <div className="flex items-center gap-x-3">
              <TbMicrophone2 className="h-4 w-4  text-[#b3b3b3] hover:text-white" />
              <MdPlaylistPlay className="h-4 w-4  text-[#b3b3b3] hover:text-white" />
              <BsPhone className="h-4 w-4 text-[#b3b3b3] hover:text-white " />
            </div>
            <div className=" flex items-center h-full gap-x-3">
              <TbVolume className="h-4 w-4  text-[#b3b3b3] hover:text-white" />
              {/* Progress Bar */}
              <div class="w-24 cursor-pointer rounded-full group h-1 bg-[#5d5d5d]">
                <div class="bg-[#b3b3b3] h-1 rounded-full  group-hover:bg-green-600 w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
