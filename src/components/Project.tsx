"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dummyProject from "../../public/dummy-project.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Modal from "./Modal";
import { Portofolio } from "@/types/project";
import Pagination from "./Pagination";

const Project = () => {
  const type: string = "project";
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [projects, setProjects] = useState<Portofolio[]>([]);
  const [idProject, setIdProject] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 3;

  const fetchAllProjects = async () => {
    try {
      const response = await fetch("/api/project");
      const { data } = await response.json();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const handleModal = (id: number) => {
    setIsModal(true);
    setIdProject(id);
  };

  const indexOfLastCertificate = currentPage * projectsPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log(projects, "this is projects");

  console.log(Math.ceil(projects.length / projectsPerPage));

  return (
    <>
      {isModal && (
        <Modal projectId={idProject} isModal={setIsModal} type={type} />
      )}
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
        <div className="grid grid-cols-3 m-12 gap-7 ">
          {currentProjects.map((project) => (
            <div className="border border-gray-500 card-bg rounded-3xl w-[370px] h-[385px] ease-in-out duration-300">
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
                    className="rounded-3xl"
                    src={project.imageUrl}
                    alt="project1"
                    layout="fill"
                    objectFit="cover"
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
            </div>
          ))}
          {/* Pagination */}
        </div>
        <div className="my-10">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(projects.length / projectsPerPage)}
            onPageChange={paginate}
          />
        </div>
      </section>
    </>
  );
};

export default Project;
