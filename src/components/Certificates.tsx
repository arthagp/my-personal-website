import React from "react";
import dicodingFe from "../../public/dicodingFE.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Certificates = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-12 ">
        <div className="flex justify-between items-center w-[1200px]">
          <h1 className="text-4xl font-semibold">
            Lets have a look at <br /> my{" "}
            <span className="text-orange-400">Certificate</span>
          </h1>
          <button className="bg-orange-400 rounded-4xl py-[5px] px-5 text-white font-semibold btnSeeAll ease-in-out duration-200">
            See All
          </button>
        </div>
        <div className="grid grid-cols-3 m-12 gap-7">
          <div className="relative card bg-gradient-to-r from-black rounded-3xl w-[400px] h-[290px]">
            <Image
              className="rounded-3xl opacity-80"
              src={dicodingFe}
              alt="dicodingFe"
            />
            <button className="absolute btnArrow text-orange-400 transition duration-300 hover:text-white right-4 top-4 hover:bg-orange-400 hover:border-none border-orange-300 border rounded-full w-9 h-9 flex justify-center items-center">
              <FaArrowRight className="arrow-icon" />
            </button>
            <div className="bg-gradient-to-r rounded-3xl from-gray-800 absolute w-[80%] h-[80px] opacity-55 bottom-0"></div>
            <div className="absolute bottom-1 my-4 ml-2">
              <h1 className="font-bold text-lg text-white">
                Dicoding: Front End Dev
              </h1>
            </div>
          </div>
          <div className="relative card bg-gradient-to-r from-black rounded-3xl w-[400px] h-[290px]">
            <Image
              className="rounded-3xl opacity-80"
              src={dicodingFe}
              alt="dicodingFe"
            />
            <button className="absolute btnArrow text-orange-400 transition duration-300 hover:text-white right-4 top-4 hover:bg-orange-400 hover:border-none border-orange-300 border rounded-full w-9 h-9 flex justify-center items-center">
              <FaArrowRight className="arrow-icon" />
            </button>
            <div className="bg-gradient-to-r rounded-3xl from-gray-800 absolute w-[80%] h-[80px] opacity-55 bottom-0"></div>
            <div className="absolute bottom-1 my-4 ml-2">
              <h1 className="font-bold text-lg text-white">
                Dicoding: Front End Dev
              </h1>
            </div>
          </div>
          <div className="relative card bg-gradient-to-r from-black rounded-3xl w-[400px] h-[290px]">
            <Image
              className="rounded-3xl opacity-80"
              src={dicodingFe}
              alt="dicodingFe"
            />
            <button className="absolute btnArrow text-orange-400 transition duration-300 hover:text-white right-4 top-4 hover:bg-orange-400 hover:border-none border-orange-300 border rounded-full w-9 h-9 flex justify-center items-center">
              <FaArrowRight className="arrow-icon" />
            </button>
            <div className="bg-gradient-to-r rounded-3xl from-gray-800 absolute w-[80%] h-[80px] opacity-55 bottom-0"></div>
            <div className="absolute bottom-1 my-4 ml-2">
              <h1 className="font-bold text-lg text-white">
                Dicoding: Front End Dev
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
