import React from "react";
import MapImage from "../photos/Map.png";

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white", // Set background color
                minHeight: "30vh", // Set a smaller minimum height
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-full">
                    <h2 className="pb-2 text-5xl font-light tracking-wide text-black">
                        We Service
                    </h2>
                    <p className="font-poppins text-3xl text-black pt-5 max-w-[1000px]">
                        Sutherland Shire //
                        Wollongong //
                       
                        Illawarra
                       //
                        Sydney
                    </p>
                    <p className="font-poppins text-2xl text-black pt-5 max-w-[1000px]">
                        Call Us on:{" "}
                        <a href="tel:0414808944" className="text-blue-500 underline">
                            0455 555 555
                        </a>{" "}
                        to see if we service your area.
                    </p>
                </div>
                <img
                    src={MapImage}
                    alt="Map"
                    className="w-full h-auto object-cover rounded-lg mt-6"
                />
            </div>
        </div>
    );
}

export default Interduce;
