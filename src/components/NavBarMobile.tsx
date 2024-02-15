import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface NavbarProps {
  handleClose: () => void;
}

const NavBarMobile = ({ handleClose }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-neutral-700 flex flex-col justify-center items-center w-full h-[100vh] z-40"
    >
      <div className="relative flex justify-center items-center h-12 my-12">
        <span className="absolute opacity-90 top-1 left-1 rounded-full w-6 h-6 bg-orange-400"></span>
        <h1 className="z-10 text-white font-bold text-2xl">ARTHA G.P</h1>
        <span className="absolute opacity-90 bottom-1 right-1 rounded-full w-6 h-6 bg-orange-400"></span>
      </div>
      <ul className="flex flex-col gap-5 text-gray-200">
        <Link
          onClick={handleClose}
          smooth={true}
          to="home"
          className="font-semibold text-lg "
        >
          Home
        </Link>
        <Link
          onClick={handleClose}
          smooth={true}
          to="project"
          className="font-semibold text-lg "
        >
          Project
        </Link>
        <Link
          onClick={handleClose}
          smooth={true}
          to="experience"
          className="font-semibold text-lg "
        >
          Experiences
        </Link>
        <Link
          onClick={handleClose}
          smooth={true}
          to="about"
          className="font-semibold text-lg "
        >
          About
        </Link>
        <Link
          onClick={handleClose}
          smooth={true}
          to="certificate"
          className="font-semibold text-lg "
        >
          Certificate
        </Link>
        <Link
          onClick={handleClose}
          smooth={true}
          to="contact"
          className="font-semibold text-lg "
        >
          Contact
        </Link>
      </ul>
    </motion.nav>
  );
};

export default NavBarMobile;
