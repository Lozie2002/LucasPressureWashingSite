import React from "react";
import MapImage from "../../Images/Map.png";

function Interduce() {
    return (
        <section
            className="flex items-center justify-center w-full min-h-[30vh] pb-8"
            style={{
                backgroundColor: "#B6EDF8",
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5 pt-10">
                <div className="flex flex-col w-full">
                    <h2 className="pb-2 text-6xl font-light tracking-wide text-black">
                        Areas We Service
                    </h2>
                    <p className="font-poppins text-4xl text-black pt-5 max-w-[1000px]">
                        Sutherland Shire, Wollongong, Illawarra, and Sydney
                    </p>
                    <p className="font-poppins text-3xl text-black pt-5 max-w-[1000px]">
                        For service inquiries, please call us at:
                        <br />
                        <strong>0455 555 555</strong>
                        <br />
                        We’re here to see if we can service your area!
                    </p>
                </div>
                {/* Uncommenting the Map image */}
                <img
                    src={MapImage}
                    alt="Map"
                    className="w-full h-auto object-cover rounded-lg mt-6"
                />
            </div>
        </section>
    );
}

export default Interduce;
