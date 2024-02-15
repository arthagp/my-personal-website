import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import NavBarMobile from "./NavBarMobile";

const HamburgNav = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleOnClicked = () => {
    setIsClicked(!isClicked);
    controls.start(isClicked ? "initial" : "cross");
  };

  useEffect(() => {
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        className={`${
          scrollY > 0 ? "shadow-box" : ""
        } fixed top-2 right-2 bg-neutral-700 rounded-full w-14 h-14 flex flex-col justify-center items-center gap-1.5 z-50 lg:hidden`}
        onClick={handleOnClicked}
      >
        <motion.span
          className="rounded-md w-8 h-[2px] bg-white"
          animate={controls}
          variants={{
            initial: { rotate: 0, y: 0 },
            cross: { rotate: 45, y: 5 },
          }}
        ></motion.span>
        <motion.span
          className="rounded-md w-8 h-[2px] bg-white"
          style={{ opacity: isClicked ? 0 : 1 }}
        ></motion.span>
        <motion.span
          className="rounded-md w-8 h-[2px] bg-white"
          animate={controls}
          variants={{
            initial: { rotate: 0, y: 0 },
            cross: { rotate: -45, y: -10 },
          }}
        ></motion.span>
      </button>
      <AnimatePresence>
        {isClicked && (
          <NavBarMobile
            handleClose={() => {
              handleOnClicked();
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgNav;
