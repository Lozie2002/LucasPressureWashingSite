import React from "react";
import { FiPhone, FiMail } from "react-icons/fi"; // Importing React icons for phone and email
import backgroundImage from "../../Images/ExteriorCleaning.jpg"; // Importing the background image

function Hero() {
  return (
    <div
      className="h-[80vh] flex flex-col items-center justify-center lg:flex-row bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Left side: Text */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-6 lg:mt-10 px-4 bg-opacity-80">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h3
            className="text-white text-3xl lg:text-5xl font-semibold drop-shadow-lg"
            style={{ fontFamily: "'Torus Pro', sans-serif", fontWeight: 600 }}
          >
            Welcome to
          </h3>
          <p
            className="text-blue-300 text-4xl lg:text-6xl font-bold drop-shadow-2xl"
            style={{ fontFamily: "'Torus Pro', sans-serif", fontWeight: 600 }}
          >
            LUSH CLEANING
          </p>

          {/* Contact Details with Blue Background */}
          <div className="flex flex-col gap-3 w-full">
            <div className="bg-blue-800 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg border-2 border-white-300">
              <FiPhone className="text-white text-2xl" />
              <span
                className="text-white text-lg lg:text-2xl font-bold align-middle"
                style={{ fontFamily: "'Torus Pro', sans-serif", fontWeight: 600 }}
              >
                0492 868 398
              </span>
            </div>

            <div className="bg-blue-800 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg border-2 border-white-300">
              <FiMail className="text-white text-2xl" />
              <span
                className="text-white text-lg lg:text-2xl font-bold text-center"
                style={{ fontFamily: "'Torus Pro', sans-serif", fontWeight: 600 }}
              >
                Lushcleaning7@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
    </div>
  );
}

export default Hero;
