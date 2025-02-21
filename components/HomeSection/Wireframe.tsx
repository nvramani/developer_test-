"use client";
import { WIREFRAME_DATA } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Wireframe: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  // **Initial animation on page load**
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  // **Scroll animations (detects up/down scroll)**
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down → Shrink slightly
        controls.start({ scale: 0.98, opacity: 0.9 });
      } 
      // else {
      //   // Scrolling Up → Expand and be more visible
      //   controls.start({ scale: 1, opacity: 1 });
      // }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.section
      animate={controls}
      initial={{ opacity: 0, y: 50 }} // Ensures fade-in from below
      transition={{ duration: 1, ease: "easeOut" }}
      className="px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-20 pt-8 md:pt-24"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-300 rounded-full flex items-center justify-center border-[6px] border-blue-500 overflow-hidden shadow-xl">
          <motion.img
            src={WIREFRAME_DATA.imageUrl}
            alt="Wireframe Illustration"
            className="w-full h-full object-cover rounded-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>

        {/* Small Image with Bounce */}
        <motion.div
          className="absolute -top-2 right-1 w-32 h-32 bg-gray-500 rounded-full flex items-center border-[3px] border-blue-500 justify-center overflow-hidden shadow-md"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <img
            src={WIREFRAME_DATA.subImageUrl}
            alt="Additional Illustration"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-center lg:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 uppercase">
          {WIREFRAME_DATA.title}
        </h2>
        <p className="text-gray-600 mt-3 max-w-md">
          {WIREFRAME_DATA.description}
        </p>

        <motion.button
          className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {WIREFRAME_DATA.buttonText}
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Wireframe;
