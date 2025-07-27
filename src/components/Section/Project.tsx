"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../Modal";
import { Portofolio } from "@/types/project";
import Pagination from "../Pagination";
import LoadProject from "../LoadProject";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";
import { dataProjects } from "@/utils/section/projects";

const Project: React.FC = () => {
  const type: string = "project";
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [idProject, setIdProject] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 3;

  const handleModal = (id: number) => {
    setIsModal(true);
    setIdProject(id);
  };

  useEffect(() => {
    if(dataProjects.length > 0) {
      setIsLoading(false);
    }
  }, [dataProjects]);

  const indexOfLastCertificate = currentPage * projectsPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - projectsPerPage;
  const currentProjects = dataProjects.slice(
    indexOfFirstCertificate,  
    indexOfLastCertificate
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} />
      {isModal && (
        <Modal projectId={idProject} isModal={setIsModal} type={type} />
      )}
      <section
        id="project"
        className="z-10 bg-project rounded-3xl flex flex-col justify-center bg-gray-800 mt-7 items-center w-full bg-project"
      >
        <div className="flex max-sm:flex-col max-sm:p-4 justify-between w-[90%] mt-12 gap-y-5">
          <h1 className="text-4xl max-sm:text-3xl max-sm:flex-col font-semibold text-white justify-start">
            Lets have a look at <br /> my{" "}
            <span className="text-orange-400">Project</span>
          </h1>
          <p className="text-white max-w-[550px] text-justify max-sm:text-sm">
            Check out my diverse portfolio of self-built projects! From
            full-stack applications to captivating landing pages and stunning
            front-end websites, each project showcases my unique skills and
            creativity. Explore the possibilities!
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap my-10 gap-7 w-full max-w-screen-xl mx-auto">
          {isLoading ? (
            <>
              <LoadProject />
              <LoadProject />
              <LoadProject />
            </>
          ) : (
            currentProjects.map((project) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                key={project.id}
                className="card-bg border border-gray-500 rounded-3xl w-[320px] md:w-[400px] h-[330px] md:h-[385px]"
              >
                <div className="border-b border-gray-500">
                  <h1 className="text-white font-semibold py-5 pl-2">
                    {project.title}
                  </h1>
                </div>
                <div className="relative flex justify-center items-center w-[100%] h-[80%]">
                  <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
                  <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
                  <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
                  <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
                    <Image
                      className="rounded-3xl opacity-90"
                      src={project.imageUrl}
                      alt="project1"
                      layout="fill"
                      objectFit="cover"
                      priority
                      placeholder="blur"
                      blurDataURL={project.imageUrl}
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleModal(project.id);
                    }}
                    className="absolute bg-button z-20 flex justify-center items-center ease-in-out duration-300 -bottom-5 -left-2 border-[12px] w-[94px] h-[94px] border-gray-800 bg-neutral-700 text-white rounded-full"
                  >
                    <FaArrowRight className="w-10 h-10" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
          {/* Pagination */}
        </div>
        <div className="my-10">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(dataProjects.length / projectsPerPage)}
            onPageChange={paginate}
          />
        </div>
      </section>
    </>
  );
};

export default Project;
