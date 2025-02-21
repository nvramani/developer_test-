"use client";
import { BLOG_DATA } from "@/utils/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const LatestBlog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(BLOG_DATA.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="px-4 md:px-6 lg:px-12 pt-8 md:pt-24">
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

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLOG_DATA.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        ).map((blog) => (
          <div key={blog.id} className="p-4">
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="!w-full !h-40 object-cover rounded-lg"
                // width={100}
                // height={160}
              />
            </div>
            <div className="my-5 w-full h-8 flex justify-start items-start text-lg font-semibold text-blue-600">
              {blog.title}
            </div>

            <div className="mt-8">
              <p className="text-gray-500 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
