import React from "react";
import Link from "next/link";
import Image from "next/image";
import btnContactMe from "../../public/arrow-right-up.svg";
import sendIcon from "../../public/send-icon.svg";
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="rounded-t-3xl bg-neutral-800 w-full text-white mt-16 max-sm:overflow-hidden">
      <div className="m-16 max-sm:m-8 flex flex-col justify-center items-center">
        <div className="flex justify-between w-full items-center m-4">
          <h1 className="text-4xl w-[50%] max-sm:text-3xl font-semibold">
            Lets Connect There
          </h1>
          <div className="w-[50%] flex justify-end">
            <button className="bg-orange-400  max-sm:text-sm rounded-3xl lg:py-2 lg:px-4 max-sm:py-2 max-sm:px-5 font-semibold flex justify-center items-center">
              Contact me
              <span className="max-sm:hidden ml-2">
                <Image src={btnContactMe} alt="btn-arrow" width={20} />
              </span>
            </button>
          </div>
        </div>
        {/* horizontal line */}
        <div className="w-full h-[1px] bg-gray-400 mt-16"></div>
        {/* horizontal line */}
        <div className="w-full my-6 flex max-sm:flex-col max-sm:gap-y-4 justify-between items-center">
          <div className="w-[50%] max-sm:w-full flex flex-col gap-y-4">
            <div className="relative flex justify-start items-center h-12 w-[150px]">
              <h1 className="z-10 decorationLogo text-white font-bold text-2xl">
                ARTHA G.P
              </h1>
            </div>
            <p className="opacity-70 text-sm font-medium w-[80%]">
              I specialize in front-end development, with a strong focus on
              React. My expertise in React ranges from intermediate to expert
              level. Beyond coding, I'm deeply passionate about crafting
              captivating and user-friendly experiences. Join me on my journey
              as I create dynamic and innovative interfaces that seamlessly
              engage users.
            </p>
            <div className="flex gap-x-3">
              <Link href="https://wa.me/628123456789" target="_blank">
                <FaWhatsapp color="white" size="1.5em" />
              </Link>
              <Link href="https://www.instagram.com/arthagp_/" target="_blank">
                <FaInstagram color="white" size="1.5em" />
              </Link>
              <Link href="https://github.com/arthagp" target="_blank">
                <FaGithub color="white" size="1.5em" />
              </Link>
              <Link href="https://www.linkedin.com/in/artha-gusfi-putra-784878194">
                <FaLinkedin color="white" size="1.5em" />
              </Link>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center gap-x-10">
            <div className="max-sm:hidden">
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
            <div className="max-sm:hidden">
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
        <div className="w-full lg:-mb-12 lg:mt-10 max-sm:mt-2 opacity-90 flex max-sm:justify-center lg:justify-between items-center font-light">
          <p>Copyright&copy; Artha Gusfi P . 2024</p>
          <p className="max-sm:hidden">
            Reference Design by Figma : Jayesh Patil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
