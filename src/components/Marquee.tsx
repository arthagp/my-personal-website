"use client";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import gsap from "gsap";

const Marquee: React.FC = () => {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    const tween = gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });

    // gsap.set(".marquee__inner", { xPercent: -50 });

    const scrollHandler = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="marquee rounded-xl flex justify-center items-center bg-orange-400 w-full h-24">
      <div
        aria-hidden="true"
        className="marquee__inner bg-white w-full h-12 flex gap-4 justify-between items-center"
      >
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
        <span className="flex marquee__part justify-center items-center gap-4 font-bold text-xl">
          <FaStar className="text-orange-400" />
          <h1 className="">Front End Developer</h1>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
