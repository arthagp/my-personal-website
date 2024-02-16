"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dummyImg from "../../public/dummy-img.png";
import { FaGithub, FaLink } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Certificate } from "../types/certificate";
import { Portofolio } from "@/types/project";
import { STACKS } from "../common/stacks";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";
import Link from "next/link";
interface ModalProps {
  isModal: (isOpen: boolean) => void;
  type: string;
  certificateId?: number;
  projectId?: number;
}

const Modal: React.FC<ModalProps> = ({
  isModal,
  type,
  certificateId,
  projectId,
}) => {
  const [certificate, setCertificate] = useState<Certificate>();
  const [projects, setProjects] = useState<Portofolio>();
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetchCertificate = async (id: number) => {
    try {
      setProgress(40);
      const response = await fetch(`/api/certificate/${id}`);
      const { data } = await response.json();
      setCertificate(data);
      setIsLoading(false);
      setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchProject = async (id: number) => {
    try {
      setProgress(40);
      const response = await fetch(`/api/project/${id}`);
      const { data } = await response.json();
      setProjects(data);
      setIsLoading(false);
      setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type === "certificate" && certificateId !== undefined) {
      handleFetchCertificate(certificateId);
    }

    if (type === "project" && projectId !== undefined) {
      handleFetchProject(projectId);
    }
  }, []);

  const handleCloseModal = () => {
    isModal(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingBar color="#f11946" progress={progress} />
      ) : (
        <>
          <div
            onClick={handleCloseModal}
            className="fixed inset-0 flex items-center justify-center bg-gray-800 backdrop-blur-sm bg-opacity-75 z-50"
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-5 max-sm:inset-9 flex flex-col max-sm:mt-15 bg-white items-center justify-center mx-auto max-w-2xl z-50 rounded-2xl overflow-y-auto"
          >
            <div className="relative h-[60%] w-full">
              {type === "certificate" ? (
                <Image
                  className="object-contain"
                  src={certificate?.imageUrl || dummyImg}
                  alt={certificate?.title || "undefined"}
                  layout="fill"
                  fill={true}
                />
              ) : (
                <Image
                  className="object-contain"
                  src={projects?.imageUrl || dummyImg}
                  alt={projects?.title || "undefined"}
                  layout="fill"
                  fill={true}
                />
              )}
              <div className="absolute top-0 left-0 inset-0 m-4">
                <button
                  className="text-gray-800 hover:text-red-500 max-sm:focus:text-red-500 focus:outline-none w-8 h-8"
                  onClick={handleCloseModal}
                >
                  <IoMdClose className="w-full h-full" />
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between gap-1 w-full h-[40%]">
              {type === "certificate" ? (
                <>
                  <h1 className="font-bold text-xl mb-2">
                    {certificate?.title}
                  </h1>
                  <p className="opacity-40 font-semibold">Certificate</p>
                  <p className="mb-4 text-sm">{certificate?.description}</p>
                </>
              ) : (
                <>
                  <h1 className="font-bold text-xl mb-2">{projects?.title}</h1>
                  <p className="opacity-40 font-semibold">Project</p>
                  <p className="mb-4 text-sm">{projects?.description}</p>
                  <span className="flex gap-x-2">
                    {projects?.techStack.map((stackId) => {
                      return STACKS[stackId];
                    })}
                  </span>
                </>
              )}
              {/* link */}
              <div className="flex py-5 justify-between w-full items-center">
                {type === "certificate" && certificate?.urlCertificate && (
                  <div className="flex justify-end">
                    <Link
                      href={certificate.urlCertificate}
                      target="_blank"
                      className="text-sm px-3 py-1 flex gap-3 items-center font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                      <FaLink />
                      See Certificate
                    </Link>
                  </div>
                )}
                {type === "project" && projects?.urlDeployment && (
                  <div className="flex justify-end">
                    <Link
                      href={projects.urlDeployment}
                      target="_blank"
                      className="text-sm px-3 py-1 flex justify-center items-center gap-3 font-medium bg-blue-400 text-white rounded-lg hover:bg-blue-500 focus:outline-none"
                    >
                      <FaLink />
                      Preview
                    </Link>
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {type === "project" && projects?.urlRepository && (
                    <div className="flex">
                      {
                        <Link
                          href={projects.urlRepository}
                          target="_blank"
                          className="text-sm px-3 py-1 flex justify-center items-center gap-3 font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:outline-none"
                        >
                          <FaGithub />
                          Github Repository
                        </Link>
                      }
                    </div>
                  )}
                  {type === "project" && projects?.urlRepoServerSide && (
                    <div className="flex">
                      <Link
                        href={projects.urlRepoServerSide}
                        target="_blank"
                        className="text-sm px-3 py-1 flex justify-center items-center gap-3 font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:outline-none"
                      >
                        <FaGithub />
                        Repository BackEnd
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Modal;
