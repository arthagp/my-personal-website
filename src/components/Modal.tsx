"use client";
import React from "react";
import Image from "next/image";
import dicodingFe from "../../public/dicodingFE.png";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isModal: (isOpen: boolean) => void;
  type: string;
}

const Modal = ({ isModal, type }: ModalProps) => {
  const handleCloseModal = () => {
    isModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 backdrop-blur-sm bg-opacity-75 z-50">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
        <div className="relative">
          <Image src={dicodingFe} alt="Dicoding Front End Developer" />
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
          <h1 className="font-bold text-2xl mb-2">
            Dicoding Front End Developer
          </h1>
          <p className="opacity-40 font-semibold">Certificate</p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            veritatis expedita, impedit eaque dolores dolore reprehenderit
            itaque possimus aut nisi sunt, at fugit beatae iure, cumque
            voluptatem fugiat dolorem nesciunt.
          </p>
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
