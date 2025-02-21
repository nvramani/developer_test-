// import { NAV_ITEMS } from "@/utils/constant";
// import { useState } from "react";
// import { FaCaretDown, FaSearch, FaUser } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);
//   const [selectedNav, setSelectedNav] = useState<string>("Home");

//   return (
//     <header className="container mx-auto">
//       <div className="flex justify-between items-center h-[100px]">
//         <div className="flex items-center ">
//           {/* Logo */}
//           <div className="flex-col mr-24">
//             <h1 className="text-black font-extrabold text-2xl">
//               <span className="text-blue-600">Visionary</span>Tech
//             </h1>
//             <p className="text-xs text-gray-500">
//               Innovate. Elevate. Dominate.
//             </p>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {NAV_ITEMS.map((item: string) => (
//               <a
//                 key={item}
//                 href="#"
//                 onClick={() => setSelectedNav(item)}
//                 className={`relative flex flex-col items-center uppercase hover:text-blue-500 ${
//                   selectedNav === item ? "text-blue-500" : "text-gray-600"
//                 }`}
//               >
//                 {item}
//                 {selectedNav === item && (
//                   <FaCaretDown className="text-blue-500 absolute -bottom-2" />
//                 )}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* Search & User Options */}
//         <div className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center bg-gray-200 rounded-full px-4 py-1">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent outline-none text-gray-600 w-24 md:w-36 uppercase text-center"
//             />
//             <span className="bg-blue-500 rounded-full p-1.5">
//               <FaSearch className="text-white" />
//             </span>
//           </div>

//           <a href="#" className="text-gray-600 uppercase hover:text-blue-500">
//             Sign Up / Log In
//           </a>

//           <button className="bg-blue-500 text-white p-2 rounded-full">
//             <FaUser />
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-600"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="md:hidden border-t px-1">
//           <ul className="flex flex-col items-center space-y-4 py-4">
//             {NAV_ITEMS.map((item: string) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   onClick={() => {
//                     setSelectedNav(item);
//                     setMenuOpen(false);
//                   }}
//                   className={`flex items-center ${
//                     selectedNav === item ? "text-blue-500" : "text-gray-600"
//                   } hover:text-blue-500`}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//             <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 w-fit md:w-full">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="bg-transparent outline-none text-gray-600 flex-grow"
//               />
//               <FaSearch className="text-blue-500" />
//             </div>
//             <a href="#" className="text-gray-600 hover:text-blue-500">
//               Sign Up / Log In
//             </a>
//             <button className="bg-blue-500 text-white p-2 rounded-full">
//               <FaUser />
//             </button>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import { NAV_ITEMS } from "@/utils/constant";
import { useState } from "react";
import { FaCaretDown, FaSearch, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("Home");

  return (
    <header className="px-4 md:px-6 lg:px-12">
      <div className="flex justify-between items-center h-[80px] md:h-[90px] lg:h-[100px]">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-col mr-6 md:mr-16 lg:mr-24">
            <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold leading-tight text-black">
              <span className="text-blue-600">Visionary</span>Tech
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-4 md:leading-5 lg:leading-6 hidden md:block">
              Innovate. Elevate. Dominate.
            </p>
          </div>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center space-x-4 md:space-x-5 lg:space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setSelectedNav(item)}
                className={`relative flex flex-col items-center uppercase text-sm md:text-base lg:text-lg hover:text-blue-500 transition-all ${
                  selectedNav === item ? "text-blue-500" : "text-gray-600"
                }`}
              >
                {item}
                {selectedNav === item && (
                  <FaCaretDown className="text-blue-500 absolute -bottom-2" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Search & User Options */}
        <div className="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-6">
          <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-gray-600 w-20 md:w-28 lg:w-36 uppercase text-center"
            />
            <span className="bg-blue-500 rounded-full p-2">
              <FaSearch className="text-white" />
            </span>
          </div>
          <a href="#" className="text-gray-600 uppercase hover:text-blue-500">
            Sign Up / Log In
          </a>
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <FaUser />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-black font-extrabold text-xl">
            <span className="text-blue-600">Visionary</span>Tech
          </h1>
          <button className="text-gray-600" onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 py-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => {
                  setSelectedNav(item);
                  setMenuOpen(false);
                }}
                className={`text-base md:text-lg uppercase ${
                  selectedNav === item ? "text-blue-500" : "text-gray-600"
                } hover:text-blue-500 transition-all`}
              >
                {item}
              </a>
            </li>
          ))}
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-4/5">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-gray-600 flex-grow"
            />
            <FaSearch className="text-blue-500" />
          </div>
          <a href="#" className="text-gray-600 hover:text-blue-500 text-lg">
            Sign Up / Log In
          </a>
          <button className="bg-blue-500 text-white p-3 rounded-full">
            <FaUser />
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
