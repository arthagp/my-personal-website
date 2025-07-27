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
import { dataProjects } from "@/utils/section/projects";
import { dataCertificates } from "@/utils/section/certificate";
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
  // const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (dataProjects.length > 0) {
      setIsLoading(false);
    }
  }, [dataProjects]);

  useEffect(() => {
    if (dataCertificates.length > 0) {
      setIsLoading(false);
    }
  }, [dataCertificates]);

  useEffect(() => {
    if (type === "certificate" && certificateId !== undefined) {
      setCertificate(dataCertificates[certificateId]);
    }
    if (type === "project" && projectId !== undefined) {
      setProjects(dataProjects[projectId]);
    }
  }, []);

  const handleCloseModal = () => {
    isModal(false);
  };

  return (
    <>
      <>
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 backdrop-blur-sm bg-opacity-75 z-50 h-full"
        ></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-5 max-sm:inset-9 flex flex-col max-sm:mt-15 bg-white items-center justify-center mx-auto max-w-2xl z-50 rounded-2xl overflow-y-auto"
        >
          <div className="relative h-1/2 w-full">
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
            <div className="fixed top-15 left-15 m-4">
              <button
                className="text-red-500 hover:text-gray-500 max-sm:focus:text-gray-500 focus:outline-none w-8 h-8"
                onClick={handleCloseModal}
              >
                <IoMdClose className="w-full h-full" />
              </button>
            </div>
          </div>
          <div className="p-4 w-full h-1/2 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
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
                  <h1 className="font-bold text-xl mb-2">
                    {projects?.title}
                  </h1>
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
            </div>
            <div className="flex mt-4 pb-4 justify-between w-full items-center">
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
      {/* {isLoading ? (
        <LoadingBar color="#f11946" progress={progress} />
      ) : (
      )} */}
    </>
  );
};

export default Modal;
