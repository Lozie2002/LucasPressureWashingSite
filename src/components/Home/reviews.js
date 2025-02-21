import React from "react";
import { FaStar } from "react-icons/fa";
import solarPanel from "../../Images/solarPanel.jpg";

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => (
                <FaStar
                    key={index}
                    className="text-yellow-500"
                    size={24}
                    color={index < rating ? "#FFD700" : "#E4E4E7"} // Gold color for filled stars, gray for empty stars
                />
            ))}
        </div>
    );
}

function Interduce() {
    return (
        <div className="relative w-full">
            {/* Reviews Header (No background image) */}
            <div className="flex items-center justify-center w-full bg-white">
    <h2
        style={{ color: "#003049", fontFamily: "'Poppins', sans-serif" }}
        className="pb-4 text-5xl md:text-6xl font-light tracking-wide md:items-center lg:items-center xl:items-start justify-start text-center md:text-center lg:text-center xl:text-left w-full max-w-screen-lg px-5 sm:px-10 md:px-14 lg:px-20 xl:mr-40 xl:ml-5"
    >
        Reviews
    </h2>
</div>


            {/* Review Items Section with Darkened Background Image */}
            <div className="flex justify-center w-full pt-16 pb-10 px-5 bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${solarPanel})`, // Background image applied here
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                {/* Dark Overlay to Darken Image */}
                <div className="absolute inset-0 bg-black opacity-50 z-0" /> {/* Darken image with overlay */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg rounded-lg p-5 relative z-10">
                    {/* Review Item 1 */}
                    <div className="bg-white border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <StarRating rating={5} />
                        <p className="font-poppins text-lg md:text-xl text-black pt-2">
                            "Lush Cleaning did an amazing job on my home! The team was professional and efficient. I highly recommend them!"
                        </p>
                        <p className="font-semibold text-gray-600 mt-2 text-md md:text-lg">
                            — Jane D.
                        </p>
                    </div>

                    {/* Review Item 2 */}
                    <div className="bg-white border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <StarRating rating={4} />
                        <p className="font-poppins text-lg md:text-xl text-black pt-2">
                            "Fantastic service! My windows have never been so clean. Will definitely use them again!"
                        </p>
                        <p className="font-semibold text-gray-600 mt-2 text-md md:text-lg">
                            — John S.
                        </p>
                    </div>

                    {/* Review Item 3 */}
                    <div className="bg-white border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <StarRating rating={5} />
                        <p className="font-poppins text-lg md:text-xl text-black pt-2">
                            "Great attention to detail and very friendly staff. I’m very pleased with the results!"
                        </p>
                        <p className="font-semibold text-gray-600 mt-2 text-md md:text-lg">
                            — Sarah T.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
