import React from "react";

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
                    Who I'm I
                </h2>
                <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className="font-light text-lg md:text-xl leading-relaxed text-[#003049] max-w-[800px] mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10"
                >
                    I'm Lukas Argerakis, the founder and owner of Lush Exterior Cleaning, established in 2022. Driven by a passion for making homes and businesses shine, my journey began after being inspired by window cleaning videos on social media. Today, I offer a range of services, including pressure washing and window cleaning, all designed to enhance the curb appeal of your property. With a strong commitment to quality, attention to detail, and customer satisfaction, I strive to deliver outstanding results every time. Whether you're looking to revitalize your home or business exterior, I'm here to help!
                </p>
                <p
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className="font-light text-lg md:text-xl text-[#003049] leading-relaxed max-w-[800px] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"
                >
                    Contact us today to find out more about our services and how I can help you keep your space clean and tidy.
                </p>
            </div>
            </div>
        </div>
    );
}

export default Interduce;
