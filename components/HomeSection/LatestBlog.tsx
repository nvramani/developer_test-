"use client";
import { BLOG_DATA } from "@/utils/constant";
import useItemsPerPage from "@/utils/useItemsPerPage";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const LatestBlog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(BLOG_DATA.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-5 pt-8 md:pt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
          LATEST BLOG
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`p-2 border rounded-md ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`p-2 border rounded-md ${
              currentPage === totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        key={currentPage} // Key change triggers reanimation
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        {BLOG_DATA.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        ).map((blog) => (
          <div key={blog.id} className="">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="!w-full !h-64 object-cover rounded-lg"
              />
            </div>
            <div className="my-5 w-full h-8 flex justify-start items-start text-lg font-semibold text-blue-600">
              {blog.title}
            </div>
            <div className="mt-2">
              <p className="text-gray-500 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestBlog;
