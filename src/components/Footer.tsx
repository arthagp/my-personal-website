import React from "react";
import Image from "next/image";
import btnContactMe from "../../public/arrow-right-up.svg";
import sendIcon from "../../public/send-icon.svg";
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-neutral-800 w-full text-white mt-16">
      <div className="m-16 flex flex-col justify-center items-center">
        <div className="flex justify-between w-full items-center m-4">
          <h1 className="text-4xl font-semibold">Lets Connect There</h1>
          <button className="bg-orange-400 rounded-3xl py-2 px-4 font-semibold flex justify-center items-center gap-2">
            Contact me{" "}
            <span>
              <Image src={btnContactMe} alt="btn-arrow" width={20} />
            </span>
          </button>
        </div>
        {/* horizontal line */}
        <div className="w-full h-[1px] bg-gray-400 mt-16"></div>
        {/* horizontal line */}
        <div className="w-full my-6 flex justify-between items-center">
          <div className="w-[50%] flex flex-col gap-y-4">
            <div className="relative flex justify-start items-center h-12 w-[150px]">
              <h1 className="z-10 decorationLogo text-white font-bold text-2xl">
                ARTHA G.P
              </h1>
            </div>
            <p className="opacity-70 text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              saepe impedit, doloribus aliquam, quasi eveniet consectetur
              incidunt veritatis nobis officiis dolores maxime. Molestias quasi
              nisi mollitia culpa at voluptatem cumque.
            </p>
            <div className="flex gap-x-3">
              <FaInstagram color="white" size="1.5em" />
              <FaGithub color="white" size="1.5em" />
              <FaWhatsapp color="white" size="1.5em" />
              <FaFacebookSquare color="white" size="1.5em" />
            </div>
          </div>
          <div className="w-[50%] flex gap-x-10">
            <div>
              <h1 className="font-semibold text-lg text-orange-400">
                Navigation
              </h1>
              <ul className="opacity-90 space-y-1 my-3">
                <li>Home</li>
                <li>Project</li>
                <li>Experience</li>
                <li>About</li>
                <li>Certificate</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold text-lg text-orange-400">Contact</h1>
              <ul className="opacity-90 space-y-1 my-3">
                <li>+62 83848762736</li>
                <li>arthagusfi11@gmail.com</li>
                <li>arthagp_</li>
                <li>artha-portofolio.com</li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold text-lg text-orange-400">
                Get Latest Information
              </h1>
              <div className="flex justify-center mt-5">
                <input
                  className="focus:outline-none rounded-l-xl text-black py-2 px-4"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="w-[35px] flex justify-center rounded-r-xl bg-orange-400 items-center ">
                  <Image src={sendIcon} alt="send-icon" width={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* horizontal line */}
        <div className="w-full h-[1px] bg-gray-400 mt-2"></div>
        {/* horizontal line */}
        <div className="w-full -mb-12 mt-10 opacity-90 flex justify-between items-center font-light">
          <p>Copyright&copy; Artha Gusfi P . 2024</p>
          <p>Reference Design by Figma : Jayesh Patil</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
