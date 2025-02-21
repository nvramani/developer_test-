"use client";
import { HOME_SECTION_DATA } from "@/utils/constant";
import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 md:pt-24 px-3 md:px-0">
      <div className="w-11/12 md:w-3/5 h-full bg-gray-300 p-8 rounded-[50px] md:rounded-r-full md:rounded-l-none border-4 border-gray-300 border-l-0 ">
        <h2 className="w-fit text-blue-500 text-xl md:text-2xl font-semibold">
          {HOME_SECTION_DATA.title}
        </h2>
        <h1 className="w-fit text-2xl md:text-4xl font-bold text-gray-700 mt-2">
          {HOME_SECTION_DATA.subtitle}
        </h1>
        <p className="w-fit text-gray-600 mt-3">
          {HOME_SECTION_DATA.description}
        </p>

        <div className="w-fit px-4 py-2 mt-4 border rounded-md bg-white">
          {HOME_SECTION_DATA.inputPlaceholder}
        </div>

        <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {HOME_SECTION_DATA.buttonText}
        </button>
      </div>

      {/* right side */}
      <div className="w-2/5 h-full bg-gray-300 hidden md:flex items-center justify-center py-8 pl-8 rounded-[50px] md:rounded-l-full md:rounded-r-none border-4 border-blue-500 border-r-0 ">
        <img
          src={HOME_SECTION_DATA.imageUrl}
          className="w-full h-64 object-cover md:rounded-l-full"
        />
      </div>
    </section>
  );
};

export default HomeSection;
