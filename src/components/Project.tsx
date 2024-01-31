"use client";
import React, { useState } from "react";
import Image from "next/image";
import dummyProject from "../../public/dummy-project.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Modal from "./Modal";

const Project = () => {
  // nantinya gallery project ini data nya akan di buat dengan format json.
  const type: string = "project";
  const [isModal, setIsModal] = useState<Boolean>(false);

  const handleModal = () => {
    setIsModal(true);
  };
  return (
    <>
      {isModal && <Modal isModal={setIsModal} type={type} />}
      <section
        id="project"
        className="z-10 rounded-3xl flex flex-col justify-center bg-gray-800 mt-7 items-center w-[100%] bg-project"
      >
        <div className="flex justify-between items-center w-[90%] my-16">
          <h1 className="text-4xl font-semibold text-white">
            Lets have a look at <br /> my{" "}
            <span className="text-orange-400">Project</span>
          </h1>
          <p className="text-white max-w-[550px] text-justify">
            Check out my diverse portfolio of self-built projects! From
            full-stack applications to captivating landing pages and stunning
            front-end websites, each project showcases my unique skills and
            creativity. Explore the possibilities!
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-12 mt-12 mb-16">
          {/* gallery projects */}
          <div className="border border-gray-500 card-bg rounded-3xl w-[290px] h-[320px] ease-in-out duration-300">
            <div className="border-b border-gray-500">
              <h1 className="text-white font-medium py-5 pl-5">Todo List</h1>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative flex justify-center items-center w-[100%] h-[80%]"
            >
              <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
              <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
              <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
              <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
                <Image
                  className="rounded-3xl"
                  src={dummyProject}
                  alt="project1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button
                onClick={handleModal}
                className="absolute bg-button flex justify-center items-center ease-in-out duration-300 -bottom-5 -left-2 border-[12px] w-[94px] h-[94px] border-gray-800 bg-neutral-700 text-white rounded-full"
              >
                <FaArrowRight className="w-10 h-10" />
              </button>
            </motion.div>
          </div>
          <div className="border border-gray-500 card-bg rounded-3xl w-[290px] h-[320px] ease-in-out duration-300">
            <div className="border-b border-gray-500">
              <h1 className="text-white font-medium py-5 pl-5">Todo List</h1>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative flex justify-center items-center w-[100%] h-[80%]"
            >
              <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
              <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
              <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
              <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
                <Image
                  className="rounded-3xl"
                  src={dummyProject}
                  alt="project1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bg-button flex justify-center items-center ease-in-out duration-300 -bottom-5 -left-2 border-[12px] w-[94px] h-[94px] border-gray-800 bg-neutral-700 text-white rounded-full">
                <FaArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
          <div className="border border-gray-500 card-bg rounded-3xl w-[290px] h-[320px] ease-in-out duration-300">
            <div className="border-b border-gray-500">
              <h1 className="text-white font-medium py-5 pl-5">Todo List</h1>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative flex justify-center items-center w-[100%] h-[80%]"
            >
              <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
              <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
              <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
              <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
                <Image
                  className="rounded-3xl"
                  src={dummyProject}
                  alt="project1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bg-button flex justify-center items-center ease-in-out duration-300 -bottom-5 -left-2 border-[12px] w-[94px] h-[94px] border-gray-800 bg-neutral-700 text-white rounded-full">
                <FaArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          </div>
        </div>
        {/* card -> pisahkan menjadi component nantinya */}
      </section>
    </>
  );
};

export default Project;
