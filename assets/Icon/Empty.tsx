import React, { FC } from "react";
interface IconType {
  className?: string;
  active?: boolean;
}
const Empty: FC<IconType> = ({ className }) => {
  return (
    <div>
      <svg
        fill="#000000"
        className={className || "w-40 h-40 text-gray-700"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6.5" cy="6.5" r="2.5"></circle>
        <path d="m14 7-5.223 8.487L7 13l-5 7h20z"></path>
      </svg>
    </div>
  );
};

export default Empty;
