"use client";
import { SUCCESS_STORIES } from "@/utils/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const MemberSuccess = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(SUCCESS_STORIES.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="px-4 md:px-6 lg:px-12 py-8 md:py-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
          MEMBER SUCCESS STORIES
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
        {SUCCESS_STORIES.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        ).map((story) => (
          <div
            key={story.id}
            className="border-2 border-blue-600 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center space-x-4">
              <img
                src={story.imageUrl}
                alt={story.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold text-blue-600">
                  {story.name}
                </h3>
                <p className="text-gray-600 text-base">{story.story}</p>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <p className="text-gray-500 text-sm">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberSuccess;
