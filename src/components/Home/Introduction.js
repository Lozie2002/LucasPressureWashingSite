import React from "react";

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "#B6EDF8", // Set background color
                minHeight: "30vh", // Set a smaller minimum height
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
                paddingTop: "2rem", // Add top padding for better spacing
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5">
                <h2 style={{ color: "#003049" }} className="pb-4 text-5xl md:text-7xl font-light tracking-wide">
                    Who Are We
                </h2>

                <p className="font-light text-xl md:text-3xl leading-relaxed text-[#003049] max-w-[800px] mt-2">
                    I'm Lukas Argerakis, the founder and owner of Lush Exterior Cleaning, established in 2022. Driven by a passion for making homes and businesses shine, my journey began after being inspired by window cleaning videos on social media. Today, I offer a range of services, including pressure washing and window cleaning, all designed to enhance the curb appeal of your property. With a strong commitment to quality, attention to detail, and customer satisfaction, I strive to deliver outstanding results every time. Whether you're looking to revitalize your home or business exterior, I'm here to help!
                </p>

                <p className="font-light text-xl md:text-3xl text-[#003049] leading-relaxed max-w-[800px] mt-4">
                    Contact us today to find out more about our services and how we can help you keep your space clean and tidy.
                </p>
            </div>
        </div>
    );
}

export default Interduce;
