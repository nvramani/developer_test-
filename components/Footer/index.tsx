import { FOOTER_COLUMNS } from "@/utils/constant";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const SOCIAL_ICONS = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-white py-12 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-10">
        {/* Footer Content Columns */}
        {FOOTER_COLUMNS.map((column, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3 text-blue-600">
              {column.title}
            </h3>
            <ul className="space-y-2">
              {column.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-black hover:text-blue-600 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter & Social Media */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-blue-600">Stay Updated</h3>
          <p className="text-gray-600 text-sm">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-gray-700 w-full"
            />
            <button className="bg-blue-600 text-white p-2 rounded-full">
              <MdOutlineMailOutline className="text-white" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            {SOCIAL_ICONS.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="text-black hover:text-blue-600 text-xl transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
