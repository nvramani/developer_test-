"use client";
import { CARD_DATA } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const CardGrid: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  // Run animation on page load
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]); // Ensure it runs only once on mount

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        controls.start({ scale: 0.98, opacity: 0.9 });
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Section fades in & slides up
      transition={{ duration: 1, ease: "easeOut" }}
      className="px-4 md:px-6 lg:px-12 pt-12 md:pt-24"
      animate={controls} // Apply scroll animations
    >
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }} // Stagger card animations
      >
        {CARD_DATA.map((card) => (
          <motion.div
            key={card.id}
            className="relative flex items-center p-6 bg-gray-200 rounded-lg w-full shadow-md"
            initial={{ opacity: 0, y: 30 }} // Each card fades in & moves up
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Animated Image Wrapper */}
            <motion.div
              className="absolute -top-7 -left-7 w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center border-[10px] border-gray-200"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>

            <div className="w-full flex flex-col">
              <div className="flex justify-end mb-10">
                <motion.h3
                  className="text-lg font-semibold text-blue-600 bg-white px-4 py-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {card.title}
                </motion.h3>
              </div>

              <motion.div
                className="w-full bg-white px-4 py-1 text-base font-semibold text-blue-600 mb-[12px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {card.subtitle}
              </motion.div>

              <motion.div
                className="space-y-2 mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 text-base">{card.description}</p>
              </motion.div>

              {/* Animated Icons */}
              <div className="flex gap-2">
                <motion.div
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsCart4 className="text-white" />
                </motion.div>
                <motion.div
                  className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaHeart className="text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CardGrid;
