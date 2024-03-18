"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { Certificate } from "../types/certificate";
import Pagination from "./Pagination";
import { FaArrowRight } from "react-icons/fa6";
import LoadCertificate from "./LoadCertificate";

const Certificates: React.FC = () => {
  const type: string = "certificate";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [idCertificate, setIdCertificate] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const certificatesPerPage = 3;

  const fetchAllCertificates = async () => {
    try {
      const response = await fetch("/api/certificate");
      const { data } = await response.json();
      setCertificates(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCertificates();
  }, []);

  const handleModal = (id: number) => {
    setIdCertificate(id);
    setIsModal(true);
  };

  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = certificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <motion.section
      id="certificate"
      className="flex flex-col justify-center items-center my-20 w-full"
    >
      {isModal && (
        <Modal certificateId={idCertificate} isModal={setIsModal} type={type} />
      )}
      <div className="flex max-sm:flex-col justify-between items-center md:px-20 w-full">
        <h1 className="text-4xl max-sm:text-3xl max-sm:text-center font-semibold">
          Lets have a look at <br /> my{" "}
          <span className="text-orange-400">Certificate</span>
        </h1>
        <motion.button
          className="bg-orange-400 rounded-4xl py-[5px] px-5 text-white font-semibold hover:bg-black max-sm:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          See All
        </motion.button>
      </div>
      <div className="flex justify-center items-center max-sm:flex-col m-12 gap-7 w-full">
        {isLoading ? (
          <>
            <LoadCertificate />
            <LoadCertificate />
            <LoadCertificate />
          </>
        ) : (
          currentCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="relative card bg-gradient-to-r from-black rounded-3xl w-[400px] h-[290px] max-sm:w-[320px] max-sm:h-[220px]"
              whileHover={{ scale: 1.05 }}
            >
              {certificate?.imageUrl && certificate?.title && (
                <Image
                  className="rounded-3xl opacity-80 object-cover"
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  fill={true}
                  layout="fill"
                  priority
                  placeholder="blur"
                  blurDataURL={certificate.imageUrl}
                />
              )}
              <button
                onClick={() => handleModal(certificate.id)}
                className="absolute btnArrow text-orange-400 transition duration-300 hover:text-white right-4 top-4 hover:bg-orange-400 hover:border-none border-orange-300 border rounded-full w-9 h-9 flex justify-center items-center"
              >
                <FaArrowRight className="arrow-icon" />
              </button>
              <div className="bg-gradient-to-r rounded-3xl from-gray-800 absolute w-[80%] h-[80px] opacity-55 bottom-0"></div>
              <div className="absolute bottom-1 my-4 ml-2">
                <h1 className="font-bold text-lg text-white">
                  {certificate.title}
                </h1>
              </div>
            </motion.div>
          ))
        )}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(certificates.length / certificatesPerPage)}
        onPageChange={paginate}
      />
    </motion.section>
  );
};

export default Certificates;
