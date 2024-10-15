import React, { useState, useEffect } from "react";
import logo from "../photos/LushCleaningLogo.png"; // Importing the logo image
import background1 from "../newPhotos/background1.jpg"; // Importing the background image
import background2 from "../newPhotos/background2.jpg"; // Importing the background image

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
      className="bg-cover bg-center h-[80vh] flex flex-wrap items-center justify-center flex-col lg:flex-row"
      style={{ backgroundImage: `url(${currentBackground})` }} // Use the current background image
    >
      {/* Left side: Text */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-10">
        <div className="flex gap-5 items-center lg:items-start justify-center flex-col">
          <h3 className="flex text-white text-4xl gap-2">Welcome to</h3>
          <span className="flex text-white text-4xl lg:text-5xl gap-2 font-bold">
            <p className="text-[black]">LUSH CLEANING!!</p>
          </span>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col mt-10">
        <img
          src={logo} // Replace with the correct image path
          alt="Aidan Lozell"
          className="w-1/3 lg:w-1/3 h-auto rounded-full"
        />
      </div>
    </div>
  );
}

export default Hero;
