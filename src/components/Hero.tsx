"use client";
import React, { useState } from "react";
import Image from "next/image";
import myPhoto from "../../public/my-photo-new.png";
import vector1 from "../../public/Vector 1.png";
import vector2 from "../../public/Vector 2.png";
import bgHeroDraw from "../../public/bg-hero.png";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  const [isPhotoHover, setIsPhotoHover] = useState<boolean>(false);

  return (
    <section
      id="home"
      className="relative w-full flex justify-center items-center flex-col my-10 pb-[250px]"
    >
      {/* pass */}
      <motion.div
        className="absolute bottom-24 left-28 w-52"
        initial={{ y: 0 }}
        animate={{
          y: isPhotoHover ? -200 : 0,
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <FaQuoteLeft className="my-2" />
        <p className="font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          blanditiis voluptates in
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isPhotoHover ? 25 : 0,
          opacity: isPhotoHover ? 0 : 1,
          scale: isPhotoHover ? 0.9 : 1,
        }}
        transition={{ duration: 0.4 }}
        className={`${
          isPhotoHover
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        } relative flex justify-center items-center flex-col`}
      >
        <div className="relative flex justify-center items-center">
          <span className="absolute flex -top-5 -right-5">
            <Image src={vector1} alt="vector-1" width={25} height={25} />
          </span>
          <h4 className="px-6 py-2 border border-black rounded-4xl font-semibold">
            Hello!
          </h4>
        </div>
        <div className="relative max-w-[1200px] my-5">
          <h1 className="font-bold text-7xl text-center">
            I'm <span className="text-orange-400">Artha</span>, <br /> Front End
            Developer
          </h1>
          <span className="absolute flex -bottom-10 -left-14">
            <Image src={vector2} alt="vector-2" width={55} height={55} />
          </span>
        </div>
      </motion.div>
      {/* pass */}
      <motion.div
        className="absolute bottom-36 right-28"
        initial={{ y: 0 }}
        animate={{
          y: isPhotoHover ? -200 : 0,
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex justify-around items-center">
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
        </div>
        <h1 className="font-semibold text-2xl">1++ Years</h1>
        <p className="font-medium text-sm">Experience</p>
      </motion.div>
      <div className="absolute top-36">
        <div className="relative flex flex-col justify-center items-center">
          {/* berisi my photo */}
          <span className="absolute bg-orange-400 top-24 rounded-full w-[550px] h-[550px]"></span>
          <motion.span
            initial={{ y: 0 }}
            animate={{
              opacity: isPhotoHover ? 1 : 0,
              scale: isPhotoHover ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className={`${
              isPhotoHover
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0"
            } absolute -top-16 w-[650px] h-[650px]`}
          >
            <Image src={bgHeroDraw} alt="bg-heroo" />
          </motion.span>
          <Image
            onMouseEnter={() => {
              setIsPhotoHover(true);
            }}
            onMouseLeave={() => {
              setIsPhotoHover(false);
            }}
            className="z-10"
            src={myPhoto}
            alt={"Picture of the author"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
