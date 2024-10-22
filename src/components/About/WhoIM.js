import React from "react";
import ExteriorCleaning from "../../FPhotos/ExteriorCleaning.jpg"; // Importing the background image

function WhoIM() {
  return (
    <div className="bg-white h-auto flex flex-col lg:flex-row items-center justify-center relative py-6">
      {/* Left Side: Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center flex-col my-6 lg:my-10 px-4 lg:px-10 z-20">
        <div className="flex flex-col items-center justify-center w-full lg:w-4/5 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-black text-3xl sm:text-4xl lg:text-4xl font-bold">
            About <span className="text-[#ad50eb]">Lush Exterior Cleaning</span>
          </h1>

          {/* Description */}
          <p className="text-black text-sm sm:text-base lg:text-lg font-light mt-4 leading-relaxed">
            I'm Lukas Argerakis, founder and owner of Lush Exterior Cleaning, established in 2022. 
            At 17 years old, I’m a passionate young entrepreneur dedicated to making homes and businesses shine. 
            My business started after being inspired by social media window cleaning videos, and today I offer a range of services, 
            from pressure washing to window cleaning, all aimed at enhancing your property’s curb appeal. 
            With a commitment to quality, attention to detail, and customer satisfaction, I deliver exceptional results. 
            Whether you're looking to refresh your home or business exterior, I’m here to help!
          </p>

          {/* Mission Statement */}
          <h2 className="text-black text-xl sm:text-2xl lg:text-2xl font-semibold mt-6">Our Mission</h2>
          <p className="text-black text-sm sm:text-base lg:text-lg font-light mt-2 leading-relaxed">
            At Lush Exterior Cleaning, our mission is to provide top-notch cleaning services that enhance the beauty and longevity of your property. 
            We believe that a clean exterior not only improves curb appeal but also reflects the pride you take in your home or business.
          </p>

          {/* Core Values */}
          <h2 className="text-black text-xl sm:text-2xl lg:text-2xl font-semibold mt-6">Core Values</h2>
          <ul className="list-disc list-inside text-black text-sm sm:text-base lg:text-lg font-light mt-2 leading-relaxed">
            <li>Quality: We strive for excellence in every job, ensuring complete customer satisfaction.</li>
            <li>Integrity: We believe in honest communication and transparency with our clients.</li>
            <li>Innovation: We stay up to date with the latest cleaning techniques and products to provide the best service possible.</li>
            <li>Community: We are dedicated to serving our local community and supporting other small businesses.</li>
          </ul>

          {/* Testimonials Section (optional) */}
         
        </div>
      </div>

      {/* Right Side: Add an image or future content here */}
      <div className="w-full lg:w-1/4 flex items-center justify-center z-20">
        {/* Image of Lush Exterior Cleaning */}
        <img
          src={ExteriorCleaning}
          alt="Lush Exterior Cleaning"
          className="h-auto max-h-[400px] w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default WhoIM;
