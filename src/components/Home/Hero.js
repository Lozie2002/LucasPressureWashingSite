import React, { useState, useEffect } from "react";
import logo from "../../photos/LushCleaningLogo.png"; // Importing the logo image
import background1 from "../../FPhotos/ExteriorCleaning.jpg"; // Importing the background image
import background2 from "../../FPhotos/SurfaceCleaning.jpg"; // Importing the background image

function Hero() {
  // State to manage the current background image
  const [currentBackground, setCurrentBackground] = useState(background1);

  useEffect(() => {
    // Function to cycle through images
    const cycleBackground = () => {
      setCurrentBackground((prev) =>
        prev === background1 ? background2 : background1
      );
    };

    // Set an interval to change the background every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(cycleBackground, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-[80vh] flex flex-col items-center justify-center lg:flex-row"
      style={{ backgroundImage: `url(${currentBackground})` }} // Use the current background image
    >
      {/* Left side: Text */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-6 lg:mt-10 px-4">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="text-white text-2xl lg:text-4xl">Welcome to</h3>
          <p className="text-[black] text-3xl lg:text-5xl font-bold">
            LUSH CLEANING!!
          </p>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center mt-6 lg:mt-10">
        <img
          src={logo} // Replace with the correct image path
          alt="Lush Cleaning Logo"
          className="w-1/2 lg:w-1/3 h-auto rounded-full shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
