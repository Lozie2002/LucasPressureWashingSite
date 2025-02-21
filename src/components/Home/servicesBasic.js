import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PressureWashingPhoto from "../../Images/ExteriorCleaning.jpg";
import ConcreteSealingPhoto from "../../Images/SideWalkCleaning2After.jpg";
import WindowCleaningPhoto from "../../Images/WindowCleaning.jpg";
import RoofCleaningPhoto1 from "../../Images/RoofCleaning1.jpg";
import SurfaceCleaningPhoto from "../../Images/SurfaceCleaning.jpg";
import SolarPanelCleaningPhoto from "../../Images/solarPanel.jpg"; // Import your Solar Panel Cleaning image

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                minHeight: "30vh",
                paddingBottom: "2rem",
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
            <div className="w-full text-left md:text-center lg:text-center xl:text-left">
            <h2
                        style={{ color: "#003049", fontFamily: "'Poppins', sans-serif" }}
                        className="pb-4 text-5xl md:text-6xl font-light tracking-wide"
                    >
                        Our Services
                    </h2>

                    {/* 2x3 Grid for Images and Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Pressure Washing */}
                        <Link to="/services" className="text-center p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={PressureWashingPhoto}
                                alt="Pressure Washing"
                                className="w-full h-[450px] object-cover mx-auto mb-4 rounded-lg"
                            />
                            <div className="bg-blue-200 text-black p-4 rounded-lg">
                                <h1
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                    className="text-3xl md:text-3xl font-semibold mb-2"
                                >
                                    Exterior Cleaning
                                </h1>
                                <p className="text-lg md:text-xl">High-pressure washing to restore your exterior surfaces to their original beauty.</p>
                            </div>
                        </Link>

                        {/* Concrete Sealing */}
                        <Link to="/services" className="text-center p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={ConcreteSealingPhoto}
                                alt="Concrete Sealing"
                                className="w-full h-[450px] object-cover mx-auto mb-4 rounded-lg"
                            />
                            <div className="bg-blue-200 text-black p-4 rounded-lg">
                                <h1
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                    className="text-3xl md:text-3xl font-semibold mb-2"
                                >
                                    Concrete Sealing
                                </h1>
                                <p className="text-lg md:text-xl">Protect and preserve your concrete surfaces with professional sealing services.</p>
                            </div>
                        </Link>

                        {/* Window Cleaning */}
                        <Link to="/services" className="text-center p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={WindowCleaningPhoto}
                                alt="Window Cleaning"
                                className="w-full h-[450px] object-cover mx-auto mb-4 rounded-lg"
                            />
                            <div className="bg-blue-200 text-black p-4 rounded-lg">
                                <h1
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                    className="text-3xl md:text-3xl font-semibold mb-2"
                                >
                                    Window Detailing
                                </h1>
                                <p className="text-lg md:text-xl">Crystal-clear windows to brighten your home or business with expert detailing.</p>
                            </div>
                        </Link>

                        {/* Roof Cleaning */}
                        <Link to="/services" className="text-center p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={RoofCleaningPhoto1}
                                alt="Roof Cleaning"
                                className="w-full h-[450px] object-cover mx-auto mb-4 rounded-lg"
                            />
                            <div className="bg-blue-200 text-black p-4 rounded-lg">
                                <h1
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                    className="text-3xl md:text-3xl font-semibold mb-2"
                                >
                                    Roof Cleaning
                                </h1>
                                <p className="text-lg md:text-xl">Remove debris, algae, and moss from your roof for improved longevity and appearance.</p>
                            </div>
                        </Link>

                        {/* Surface Cleaning */}
                        <Link to="/services" className="text-center p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={SurfaceCleaningPhoto}
                                alt="Surface Cleaning"
                                className="w-full h-[450px] object-cover mx-auto mb-4 rounded-lg"
                            />
                            <div className="bg-blue-200 text-black p-4 rounded-lg">
                                <h1
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                    className="text-3xl md:text-3xl font-semibold mb-2"
                                >
                                    Surface Cleaning
                                </h1>
                                <p className="text-lg md:text-xl">Professional cleaning of a wide range of surfaces, ensuring pristine results.</p>
                            </div>
                        </Link>

                        {/* Solar Panel Cleaning */}
                        <Link to="/services" className="text-center p-4 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={SolarPanelCleaningPhoto}
                                alt="Solar Panel Cleaning"
                                className="w-full h-[450px] object-cover mx-auto mb-4 rounded-lg"
                            />
                            <div className="bg-blue-200 text-black p-4 rounded-lg">
                                <h1
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                    className="text-3xl md:text-3xl font-semibold mb-2"
                                >
                                    Solar Panel Cleaning
                                </h1>
                                <p className="text-lg md:text-xl">Enhance the efficiency of your solar panels by keeping them clean and free from dirt.</p>
                            </div>
                        </Link>
                    </div>

                    {/* Single "See More Information" Button */}
                    <Link to="/services" className="mt-8 inline-block">
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-black transition duration-300">
                            See More Information
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
