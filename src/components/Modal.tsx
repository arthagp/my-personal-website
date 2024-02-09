"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dummyImg from "../../public/dummy-img.png";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Certificate } from "../types/certificate";
import { Portofolio } from "@/types/project";
import { STACKS } from "../common/stacks";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";
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
            className="fixed inset-0  flex items-center justify-center bg-gray-800 backdrop-blur-sm bg-opacity-75 z-50"
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex translate-y-5 flex-col items-center justify-center mx-auto h-[95vh] max-w-2xl z-50 rounded-2xl overflow-hidden"
          >
            <div className="relative h-full w-full bg-white rounded-t-2xl">
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
              <div className="absolute top-0 left-0 m-4">
                <button
                  className="text-gray-700 hover:text-gray-900 focus:outline-none w-8 h-8"
                  onClick={handleCloseModal}
                >
                  <IoMdClose className="w-full h-full" />
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 bg-white w-full h-64 rounded-b-2xl">
              {type === "certificate" ? (
                <>
                  <h1 className="font-bold text-2xl mb-2">
                    {certificate?.title}
                  </h1>
                  <p className="opacity-40 font-semibold">Certificate</p>
                  <p className="mb-4 text-sm">{certificate?.description}</p>
                </>
              ) : (
                <>
                  <h1 className="font-bold text-2xl mb-2">{projects?.title}</h1>
                  <p className="opacity-40 font-semibold">Project</p>
                  <p className="mb-4 text-sm">{projects?.description}</p>
                  <span className="flex gap-x-2">
                    {projects?.techStack.map((stackId) => {
                      return STACKS[stackId];
                    })}
                  </span>
                </>
              )}
              {type === "certificate" ? (
                <div className="flex justify-end">
                  <button className="text-sm px-3 py-1 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                    Download Certificate
                  </button>
                </div>
              ) : null}
              {type === "project" ? (
                <div className="flex justify-end">
                  <button className="text-sm px-3 py-1 flex justify-center items-center gap-3 font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:outline-none">
                    <FaGithub />
                    Github Repository
                  </button>
                </div>
              ) : null}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Modal;
