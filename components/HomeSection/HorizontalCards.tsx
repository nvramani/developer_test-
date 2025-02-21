"use client";
import { HORIZONTAL_CARDS_DATA } from "@/utils/constant";
import React from "react";

const HorizontalCards: React.FC = () => {
  return (
    <section className="flex items-center justify-center bg-white px-5 py-20">
      <div className="bg-gray-300 p-6 rounded-md">
        <div className="flex flex-wrap justify-center md:justify-start">
          {HORIZONTAL_CARDS_DATA.map((item, index, arr) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center h-full relative"
            >
              <div className="w-64 p-4 flex-shrink-0 text-center md:text-left">
                <h3 className="text-lg font-bold text-blue-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2">{item.description}</p>
              </div>

              {index < arr.length - 1 && (
                <div className="relative flex justify-center items-center md:mx-4 sm:my-4">
                  <div className="hidden md:block relative w-1 h-20">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-500"></div>
                    <div className="absolute left-1/2 top-1/2 h-6 w-0.5 bg-black"></div>
                  </div>

                  <div className="block md:hidden relative w-20 h-1">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalCards;
