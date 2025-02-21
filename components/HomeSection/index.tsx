"use client";
import { HOME_SECTION_DATA } from "@/utils/constant";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const HomeSection: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  // Run animation on page load
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]); // Ensure it runs only once on mount

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.section
      animate={controls}
      initial={{ opacity: 0, y: 50 }} // Ensures it starts hidden and moves up
      transition={{ duration: 1, ease: "easeOut" }}
      className="container-fluid mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 md:pt-24"
    >
      {/* Left Side */}
      <motion.div
        className="w-11/12 md:w-3/5 h-full bg-gray-300 p-8 rounded-[50px] md:rounded-r-full md:rounded-l-none border-4 border-gray-300 border-l-0 md:!pl-[75px] min-h-[330px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }} // Runs on load
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="w-fit text-blue-500 text-xl md:text-2xl font-semibold">
          {HOME_SECTION_DATA.title}
        </h2>
        <h1 className="w-fit text-2xl md:text-4xl font-bold text-gray-700 mt-2">
          {HOME_SECTION_DATA.subtitle}
        </h1>
        <p className="w-fit text-gray-600 mt-3">
          {HOME_SECTION_DATA.description}
        </p>

        <motion.div
          className="w-fit px-4 py-2 mt-4 border rounded-md bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {HOME_SECTION_DATA.inputPlaceholder}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-600"
        >
          {HOME_SECTION_DATA.buttonText}
        </motion.button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-2/5 h-full  hidden md:flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={HOME_SECTION_DATA.imageUrl}
          className="w-full h-64 object-cover md:rounded-l-full bg-gray-300 rounded-[50px] md:rounded-r-none border-4 border-blue-500 border-r-0 min-h-[330px]"
          initial={{ scale: 0.9, rotate: 5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
