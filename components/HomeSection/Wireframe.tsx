"use client";
import { WIREFRAME_DATA } from "@/utils/constant";
import React from "react";

const Wireframe: React.FC = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-20 pt-8 md:pt-24">
      {/* Image Section */}
      <div className="relative">
        <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-300 rounded-full flex items-center justify-center border-[6px] border-blue-500 overflow-hidden">
          <img
            src={WIREFRAME_DATA.imageUrl}
            alt="Wireframe Illustration"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="absolute -top-2 right-1 w-32 h-32 bg-gray-500 rounded-full flex items-center border-[3px] border-blue-500 justify-center overflow-hidden">
          <img
            src={WIREFRAME_DATA.subImageUrl}
            alt="Additional Illustration"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 uppercase">
          {WIREFRAME_DATA.title}
        </h2>
        <p className="text-gray-600 mt-3 max-w-md">
          {WIREFRAME_DATA.description}
        </p>

        <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition uppercase">
          {WIREFRAME_DATA.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Wireframe;
