"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch, FaUser, FaCaretDown } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { NAV_ITEMS } from "@/utils/constant";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("Home");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Animate header on mount (Page Load)
    controls.start({ y: 0, opacity: 1 });

    // Detect scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down, hide header
        setVisible(false);
      } else {
        // Scrolling up, show header
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, controls]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Animation on page load
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="container mx-auto px-5 w-full"
    >
      <div className="mx-auto flex justify-between items-center h-[80px] md:h-[90px] lg:h-[100px] transition-all duration-300">
        {/* Left: Logo */}
        <div className="flex-col w-fit">
          <h1
            className="text-lg md:text-xl lg:text-2xl font-extrabold leading-tight text-black"
            id="header-logo"
          >
            <span className="text-blue-600">Visionary</span>Tech
          </h1>
          <p
            className="text-xs md:text-sm lg:text-base text-gray-500 leading-4 md:leading-5 lg:leading-6 hidden lg:block"
            id="sub-header-logo"
          >
            Innovate. Elevate. Dominate.
          </p>
        </div>

        {/* Center: Nav Links (Hidden in Mobile) */}
        <nav className="hidden md:flex items-center space-x-4 md:space-x-5 lg:space-x-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              id="nav-items"
              onClick={() => setSelectedNav(item)}
              className={`relative flex flex-col items-center text-base hover:text-blue-500 transition-all ${
                selectedNav === item ? "text-blue-500" : "text-gray-600"
              }`}
            >
              {item}
              {selectedNav === item && (
                <FaCaretDown className=" text-blue-500 absolute -bottom-2" />
              )}
            </a>
          ))}
        </nav>

        {/* Search & Profile Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-1">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-gray-600 w-24 md:w-36"
            />
            <FaSearch className="text-blue-500" />
          </div>

          {/* Sign Up / Log In */}
          <a
            href="#"
            id="signup-login"
            className="text-gray-600 hover:text-blue-500"
          >
            Sign Up / Log In
          </a>

          {/* Profile Icon */}
          <button className="bg-blue-600 text-white p-2 rounded-full">
            <FaUser />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
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
          <button className="bg-blue-600 text-white p-3 rounded-full">
            <FaUser />
          </button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
