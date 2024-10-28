import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md"; // Importing a contact icon
import { Link } from "react-router-dom";

function MobileNav({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full left-0 rounded-b-md z-50 transition-all duration-500 overflow-hidden ${
        showNav
          ? "bg-black h-1/2 top-[68px] border-2 border-t-0 border-black shadow-lg"
          : "bg-black h-0 top-[68px]"
      }`}
    >
      <div className="flex flex-col items-center text-white mt-10">
        <ul className="flex flex-col gap-5">
          {/* Home Link */}
          <li className="relative group w-full">
            <Link
              to="/"
              className="flex gap-2 items-center justify-center cursor-pointer text-base font-bold relative py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineHome fontSize={20} />
              <span>Home</span>
            </Link>
          </li>

          {/* About Link */}
          <li className="relative group w-full">
            <Link
              to="/about"
              className="flex gap-2 items-center justify-center cursor-pointer text-base font-bold relative py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => setShowNav(false)}
            >
              <FiUser fontSize={20} />
              <span>About</span>
            </Link>
          </li>

          {/* Services Link */}
          <li className="relative group w-full">
            <Link
              to="/services"
              className="flex gap-2 items-center justify-center cursor-pointer text-base font-bold relative py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => setShowNav(false)}
            >
              <AiOutlineFundProjectionScreen fontSize={20} />
              <span>Services</span>
            </Link>
          </li>

          {/* Gallery Link */}
          <li className="relative group w-full">
            <Link
              to="/gallery"
              className="flex gap-2 items-center justify-center cursor-pointer text-base font-bold relative py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => setShowNav(false)}
            >
              <FiFileText fontSize={20} />
              <span>Gallery</span>
            </Link>
          </li>

          {/* Contact Link */}
          <li className="relative group w-full">
            <Link
              to="/contact"
              className="flex gap-2 items-center justify-center cursor-pointer text-base font-bold relative py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => setShowNav(false)}
            >
              <MdOutlineContactMail fontSize={20} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
