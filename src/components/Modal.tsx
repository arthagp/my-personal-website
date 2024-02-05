"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dummyImg from "../../public/dummy-img.png";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Certificate } from "../types/certificate";
import { Portofolio } from "@/types/project";
import { SiGithub } from "react-icons/si";
import { STACKS } from "../common/stacks";

interface ModalProps {
  isModal: (isOpen: boolean) => void;
  type: string;
  certificateId?: number;
  projectId?: number;
}

const Modal = ({ isModal, type, certificateId, projectId }: ModalProps) => {
  const [certificate, setCertificate] = useState<Certificate>();
  const [projects, setProjects] = useState<Portofolio>();
  const icons = [1,3];

  console.log(projects, "prohect");

  const handleFetchCertificate = async (id: number) => {
    try {
      const response = await fetch(`/api/certificate/${id}`);
      const { data } = await response.json();
      setCertificate(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchProject = async (id: number) => {
    try {
      const response = await fetch(`/api/project/${id}`);
      const { data } = await response.json();
      setProjects(data);
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 backdrop-blur-sm bg-opacity-75 z-50">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
        <div className="relative h-[450px] w-full">
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
        <div className="p-4 flex flex-col gap-1">
          {type === "certificate" ? (
            <>
              <h1 className="font-bold text-2xl mb-2">{certificate?.title}</h1>
              <p className="opacity-40 font-semibold">Certificate</p>
              <p className="mb-4 text-sm">{certificate?.description}</p>
            </>
          ) : (
            <>
              <h1 className="font-bold text-2xl mb-2">{projects?.title}</h1>
              <p className="opacity-40 font-semibold">Project</p>
              <p className="mb-4 text-sm">{projects?.description}</p>
              <span className="flex gap-x-2">
                {/* {STACKS[0]}
                {STACKS[2]} */}
                {projects?.techStack.map((stackId) => {
                  return STACKS[stackId]
                })}
              </span>
            </>
          )}

          {type === "certificate" ? (
            <div className="flex justify-end">
              <button className="px-4 py-2 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                Download Certificate
              </button>
            </div>
          ) : null}
          {type === "project" ? (
            <div className="flex justify-end">
              <button className="px-4 py-2 flex justify-center items-center gap-3 font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:outline-none">
                <FaGithub />
                Github Repository
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
