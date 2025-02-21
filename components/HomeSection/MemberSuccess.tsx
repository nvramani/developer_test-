"use client";
import { SUCCESS_STORIES } from "@/utils/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const MemberSuccess = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(SUCCESS_STORIES.length / itemsPerPage);

  // Animation controls
  const controls = useAnimation();

  useEffect(() => {
    // Fade-in animation on page load
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        // Scrolling Down
        controls.start({ opacity: 0, y: 50, transition: { duration: 0.4 } });
      }
      // else {
      //   // Scrolling Up
      //   controls.start({ opacity: 1, y: -50, transition: { duration: 0.4 } });
      // }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, lastScrollY]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      controls
        .start({ opacity: 0, y: 50, transition: { duration: 0.3 } })
        .then(() => {
          setCurrentPage((prev) => prev + 1);
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
        });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      controls
        .start({ opacity: 0, y: -50, transition: { duration: 0.3 } })
        .then(() => {
          setCurrentPage((prev) => prev - 1);
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
        });
    }
  };

  return (
    <motion.div
      className="px-4 md:px-6 lg:px-12 py-8 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
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

      <motion.div
        key={currentPage}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
      >
        {SUCCESS_STORIES.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        ).map((story) => (
          <motion.div
            key={story.id}
            className="border-2 border-blue-600 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
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
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MemberSuccess;
