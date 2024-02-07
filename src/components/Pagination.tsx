import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const paginationButtons = [];
  for (let i = 0; i < totalPages; i++) {
    paginationButtons.push(
      <li key={i} className="flex justify-center items-center">
        <motion.button
          onClick={() => onPageChange(i + 1)}
          className={`${
            currentPage === i + 1 ? "bg-orange-400 text-white" : "bg-gray-300"
          } rounded-full ${
            currentPage === i + 1 ? "px-3 py-3" : "px-2 py-2"
          } hover:bg-orange-500`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.button>
      </li>
    );
  }

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex space-x-4 justify-center items-center">
        <li>
          <motion.button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`bg-orange-400 text-white rounded-lg px-4 py-2 ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-orange-500"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowLeft />
          </motion.button>
        </li>
        {paginationButtons}
        <li>
          <motion.button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`bg-orange-400 text-white rounded-lg px-4 py-2 ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-orange-500"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowRight />
          </motion.button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
