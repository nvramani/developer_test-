"use client";
import { HORIZONTAL_CARDS_DATA } from "@/utils/constant";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const HorizontalCards: React.FC = () => {
  const controls = useAnimation();
  let lastScrollY = 0;

  useEffect(() => {
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
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.section
      className="container mx-auto px-5 pt-8 md:pt-24"
      animate={controls}
    >
      <div className="bg-gray-300 p-6 rounded-md">
        <div className="flex flex-wrap justify-center md:justify-start">
          {HORIZONTAL_CARDS_DATA.map((item, index, arr) => (
            <motion.div
              key={item.id}
              className="w-full md:w-1/4 flex flex-col md:flex-row items-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="p-4 text-center md:text-left">
                <motion.h3
                  className="text-lg font-bold text-blue-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-sm mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>

              {index < arr.length - 1 && (
                <motion.div
                  className="relative flex justify-center items-center w-2/5 md:mx-4 sm:my-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="hidden md:block relative w-1 h-20">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-600"></div>
                    <div className="absolute left-1/2 top-1/2 h-6 w-0.5 bg-black"></div>
                  </div>

                  <div className="block md:hidden relative w-full h-1">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-600"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HorizontalCards;
