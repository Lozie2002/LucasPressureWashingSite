import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose, MdOutlineCleaningServices, MdOutlineContactMail } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import MobileNav from "./MobileNav";
import logo from "../../Photos/LushCleaningLogo.png"; // Importing the logo image

function Header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-4 z-50 ${scroll ? 'bg-black bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg shadow-lg lg:sticky top-0' : 'bg-black'} transition-all duration-300`}
    >
      {/* Replacing name with logo */}
      <span className="md:w-1/3 lg:w-1/2 flex items-center justify-center py-5 px-2 relative">
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer w-30 h-16"
          onClick={() => navigate("/")} // Navigate to the homepage on click
        />
        <h1 className="text-white text-2xl font-bold ml-4"> Lush Cleaning</h1>
      </span>

      {/* Desktop navigation links */}
      <div className="w-2/3 hidden lg:flex items-center justify-start text-white">
        <ul className="flex gap-8 lg:gap-12">
          <li className="relative group">
            <Link
              to={"/"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <AiOutlineHome fontSize={20} />
              <span className="">Home</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/about"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <FiUser fontSize={20} />
              <span className="">About</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/gallery"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <BsImages fontSize={20} />
              <span className="">Gallery</span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to={"/services"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <MdOutlineCleaningServices fontSize={20} />
              <span className="">Services</span>
            </Link>
          </li>
          {/* Contact section */}
          <li className="relative group">
            <Link
              to={"/contact"}
              className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
            >
              <MdOutlineContactMail fontSize={20} />
              <span className="">Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile navigation toggle */}
      <span>
        <div className="h-full lg:hidden flex items-center justify-center cursor-pointer relative">
          {showNav ? (
            <MdClose
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          ) : (
            <RiMenu3Fill
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          )}
          <MobileNav showNav={showNav} setShowNav={setShowNav} />
        </div>
      </span>
    </div>
  );
}

export default Header;
