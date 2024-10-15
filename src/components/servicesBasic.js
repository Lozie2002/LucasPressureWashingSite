import React from "react";
import PressureWashingImage from "../photos/driveway.png";
import ConcreteSealingImage from "../photos/driveway.png";
import WindowCleaningImage from "../photos/driveway.png";
import GutterCleaningImage from "../photos/driveway.png";
import SoftWashingImage from "../photos/driveway.png";
import RoofWashingSolarCleaningImage from "../photos/driveway.png"; // Combined image

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white",
                minHeight: "30vh",
                paddingBottom: "2rem",
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-[100%]">
                    <p className="pb-6 text-4xl md:text-5xl font-light tracking-wide text-black">
                        Our Services
                    </p>

                    {/* 2x3 Grid for Images and Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Pressure Washing */}
                        <section className="text-center">
                            <img
                                src={PressureWashingImage}
                                alt="Pressure Washing"
                                className="w-80 h-auto mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                                Pressure Washing
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Pressure washing removes stubborn stains, grime, mould, and algae, all possible slip hazards for your family.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Average Price for Pressure Washing: $150</strong>
                            </p>
                        </section>

                        {/* Concrete Sealing */}
                        <section className="text-center">
                            <img
                                src={ConcreteSealingImage}
                                alt="Concrete Sealing"
                                className="w-80 h-auto mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                                Concrete Sealing
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Sealing your concrete creates a barrier against water infiltration, moisture damage, and pollutants like oil and grease.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Average Price for Concrete Sealing: $200</strong>
                            </p>
                        </section>

                        {/* Window Cleaning */}
                        <section className="text-center">
                            <img
                                src={WindowCleaningImage}
                                alt="Window Cleaning"
                                className="w-80 h-auto mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                                Window Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Clean windows allow more sunlight into your home, making it brighter and more inviting.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Average Price for Window Cleaning: $100</strong>
                            </p>
                        </section>

                        {/* Gutter Cleaning */}
                        <section className="text-center">
                            <img
                                src={GutterCleaningImage}
                                alt="Gutter Cleaning"
                                className="w-80 h-auto mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                                Gutter Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Gutter cleaning helps prevent water damage by ensuring rainwater flows freely through your drainage system.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Average Price for Gutter Cleaning: $120</strong>
                            </p>
                        </section>

                        {/* Soft Washing */}
                        <section className="text-center">
                            <img
                                src={SoftWashingImage}
                                alt="Soft Washing"
                                className="w-80 h-auto mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                                Soft Washing
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                Soft washing removes contaminants, mildew, stains, and algae from your home’s exterior surfaces.
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Average Price for Soft Washing: $180</strong>
                            </p>
                        </section>

                        {/* Roof & Solar Panel Cleaning */}
                        <section className="text-center">
                            <img
                                src={RoofWashingSolarCleaningImage}
                                alt="Roof & Solar Panel Cleaning"
                                className="w-80 h-auto mx-auto mb-4 rounded-lg"
                            />
                            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                                Roof & Solar Panel Cleaning
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-black">
                                We provide roof washing to remove mould and mildew, and solar panel cleaning to improve energy efficiency (up to 20%).
                            </p>
                            <p className="font-poppins text-lg md:text-xl text-black mt-2">
                                <strong>Average Price for Roof & Solar Panel Cleaning: $250</strong>
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
