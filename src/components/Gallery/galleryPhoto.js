import React from "react";
import SolarPhoto from "../../FPhotos/solarPanel.jpg";
import PressureWashingPhoto from "../../FPhotos/ExteriorCleaning.jpg";
import ConcreteSealingPhoto from "../../FPhotos/SideWalkCleaning2After.jpg";
import WindowCleaningPhoto from "../../FPhotos/WindowCleaning.jpg";
import RoofCleaningPhoto1 from "../../FPhotos/RoofCleaning1.jpg";
import RoofCleaningPhoto2 from "../../FPhotos/RoofCleaning2.jpg";
import RoofCleaningPhoto3 from "../../FPhotos/RoofCleaning3.jpg";
import SurfaceCleaningPhoto from "../../FPhotos/SurfaceCleaning.jpg";

function GallerySection() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white", // Set background color
                minHeight: "80vh", // Increase height for the gallery
                paddingBottom: "2rem", // Adjust bottom padding
                paddingTop: "2rem", // Add top padding for better spacing
            }}
        >
            <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-5">
                {/* Section Heading */}
                <h2 className="pb-4 text-5xl font-light tracking-wide text-black text-center">
                    Our Gallery
                </h2>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
                    {/* Gallery Images */}
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={SolarPhoto} alt="Gallery 1" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={PressureWashingPhoto} alt="Gallery 2" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={ConcreteSealingPhoto} alt="Gallery 3" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={WindowCleaningPhoto} alt="Gallery 4" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={RoofCleaningPhoto1} alt="Gallery 5" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={RoofCleaningPhoto2} alt="Gallery 6" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={RoofCleaningPhoto3} alt="Gallery 7" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-full h-80 bg-gray-200"> {/* Increased height */}
                        <img src={SurfaceCleaningPhoto} alt="Gallery 8" className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Optionally, add more images as needed */}
            </div>
        </div>
    );
}

export default GallerySection;
