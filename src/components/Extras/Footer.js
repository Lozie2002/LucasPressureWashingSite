import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import logo1 from "../../photos/LushCleaningLogo.png"; // Default import for logo

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between bg-black text-white px-6 py-4">
      {/* Flex container for logo, company name, and designer credit */}
      <div className="flex w-full justify-between items-center mb-2">
        {/* Left section for logo and company name */}
        <div className="flex items-center">
          <img src={logo1} alt="Logo" className="h-12 w-auto mr-2" />
          <h1 className="text-2xl font-semibold">Lush Cleaning</h1>
        </div>

        {/* Right section for designer credit */}
        <p className="text-sm text-right">
          Designed and Developed by <strong>Aidan Lozell</strong>
        </p>
      </div>

      {/* Slogan under logo and company name */}
      <p className="text-sm text-gray-400 mb-2 text-left w-full">Your trusted cleaning service</p> {/* Slogan here */}

      {/* Divider line */}
      <hr className="border-t border-gray-600 w-full mb-2" />

      {/* Social media links */}
      <span className="flex items-center justify-center gap-7 mb-2">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/riteshk_007/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-white transition-transform transform hover:scale-110"
          aria-label="Instagram"
        >
          <AiFillInstagram size={30} /> {/* Increased icon size */}
        </a>
        
        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/yourfacebookprofile" // Replace with your actual Facebook link
          target="_blank"
          rel="noreferrer"
          className="text-white transition-transform transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebook size={30} /> {/* Increased icon size */}
        </a>
        
      </span>
      <p className="text-xs text-gray-500 mb-2 text-center w-full">
        &copy; {new Date().getFullYear()} Lush Cleaning. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
