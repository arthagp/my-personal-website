import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import myLogo from "../../public/logo.png";
import Image from "next/image";

interface NavbarProps {
  handleClose: () => void;
}

const NavBarMobile = ({ handleClose }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 370 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 370 }}
      transition={{ duration: 0.9 }}
      className="fixed inset-0 bg-neutral-700 flex flex-col justify-center items-center w-full h-[100vh] z-40"
    >
      <div className="relative flex justify-center items-center w-36 h-36 mt-12 mb-2">
        <Image
          src={myLogo}
          alt="my-photo"
          className="absolute object-contain inset-0 w-full h-full"
        />
      </div>
      <ul className="flex flex-col gap-5 text-gray-200">
        <Link
          onClick={handleClose}
          smooth={true}
          offset={-50}
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
