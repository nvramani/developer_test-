"use client";
import { CARD_DATA } from "@/utils/constant";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const CardGrid: React.FC = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 pt-12 md:pt-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-0">
        {CARD_DATA.map((card) => (
          <div
            className="relative flex items-center p-6 bg-gray-200 rounded-lg w-full shadow-md"
            key={card.id}
          >
            <div className="absolute -top-7 -left-7 w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center border-[10px] border-gray-200">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full rounded-full object-cover"
              />{" "}
            </div>

            <div className="w-full flex flex-col">
              <div className="flex justify-end mb-10">
                <h3 className="text-lg font-semibold text-blue-600 bg-white px-4 py-2 ">
                  {card.title}
                </h3>
              </div>

              <div className="w-full bg-white px-4 py-1 text-base font-semibold text-blue-600 mb-[12px]">
                {card.subtitle}
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-gray-500 text-base">{card.description}</p>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">
                  <BsCart4 className="text-white" />
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                  <FaHeart className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
