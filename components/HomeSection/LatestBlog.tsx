"use client";
import { BLOG_DATA } from "@/utils/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const LatestBlog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(BLOG_DATA.length / itemsPerPage);
  const controls = useAnimation();
  let lastScrollY = 0;

  useEffect(() => {
    // Initial animation on page load
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling Down
        controls.start({
          y: -20,
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" },
        });
      } 
      // else {
      //   // Scrolling Up
      //   controls.start({
      //     y: 20,
      //     opacity: 1,
      //     transition: { duration: 0.3, ease: "easeOut" },
      //   });
      // }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      controls
        .start({ opacity: 0, y: 50 })
        .then(() =>
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          })
        );
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      controls
        .start({ opacity: 0, y: -50 })
        .then(() =>
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          })
        );
    }
  };

  return (
    <motion.div
      className="px-4 md:px-6 lg:px-12 pt-8 md:pt-24"
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
    >
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
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        animate={controls}
      >
        {BLOG_DATA.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        ).map((blog) => (
          <motion.div
            key={blog.id}
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
              <motion.img
                src={blog.imageUrl}
                alt={blog.title}
                className="!w-full !h-40 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div
              className="my-5 w-full h-8 flex justify-start items-start text-lg font-semibold text-blue-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {blog.title}
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-sm">{blog.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LatestBlog;
