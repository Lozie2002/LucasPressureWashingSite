import React from "react";
import MapImage from "../../Images/Map.png";

function Interduce() {
    return (
        <section className="flex items-center justify-center w-full min-h-[30vh] pb-8 bg-white">
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                {/* Service Areas Heading and Text Container */}
                <div className="w-full text-left md:text-center lg:text-center xl:text-left">
                    <h2
                        style={{ color: "#003049", fontFamily: "'Poppins', sans-serif" }}
                        className="pb-4 text-5xl md:text-6xl font-light tracking-wide"
                    >
                        Service Areas
                    </h2>
                </div>

               
                
                {/* Service Locations as Dot Points */}
                <p className="font-poppins text-2xl md:text-2xl text-black pt-5 max-w-[1000px]">
                    Sutherland Shire NSW, Wollongong NSW, Illawarra NSW, and surrounding areas.
                    </p>

                {/* Map Image */}
                <img
                    src={MapImage}
                    alt="Map"
                    className="w-full h-auto object-cover rounded-lg mt-6"
                />

                <p className="font-poppins text-2xl md:text-2xl text-black pt-5 max-w-[1000px]">
                    For service inquiries, please call us at:
                    <br />
                    <strong>0492 868 398</strong>
                </p>
            </div>
        </section>
    );
}

export default Interduce;
