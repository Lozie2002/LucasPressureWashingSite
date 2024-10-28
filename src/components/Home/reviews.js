import React from "react";
import { FaStar } from "react-icons/fa";

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
        <div
            className="flex items-center justify-center w-full"
            style={{
                minHeight: "50vh", // Increased minimum height for better layout
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
                backgroundColor: "#B6EDF8", // Background color
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-[100%]">
                    {/* Review Section */}
                    <div className="pt-10">
                    <h2 style={{ color: "#003049" }} className="pb-4 text-5xl md:text-7xl font-light tracking-wide">
                    Customer Reviews
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
        </div>
    );
}

export default Interduce;
