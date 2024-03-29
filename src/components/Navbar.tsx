"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";
import myLogo from "../../public/logo.png";

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className={`navbar my-7 max-sm:hidden w-full`}
    >
      <nav
        className={`${
          scrollY > 0 ? `shadow-box` : ``
        } flex justify-center items-center h-16 rounded-[30px] mx-auto bg-neutral-800 text-white max-w-[1150px]`}
      >
        <ul className="flex nav justify-center lg:gap-x-14  font-extralight">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-300}
              spy={true}
              activeClass="active"
              className="py-3 px-6 ml-2"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="project"
              smooth={true}
              offset={-50}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              offset={-50}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Experience
            </Link>
          </li>
        </ul>
        <div className="relative flex justify-center items-center w-full h-12 mx-16">
          <Image className="w-full h-full" src={myLogo} alt="my-photo" />
        </div>
        <ul className="flex justify-center mx-auto items-center gap-x-10 font-extralight">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="certificate"
              smooth={true}
              offset={-90}
              spy={true}
              activeClass="active"
              className="py-3 px-6"
            >
              Certificate
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-200}
              spy={true}
              className="py-3 px-6"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
