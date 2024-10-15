import React from "react";

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white", // Set background color
                minHeight: "30vh", // Set a smaller minimum height
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
                paddingTop: "2rem", // Add top padding for better spacing
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5">
                <div className="flex w-full flex-col md:w-full">
                    <h2 className="pb-2 text-5xl font-light tracking-wide text-black">
                        Who Are We
                    </h2>
                    <p className="font-poppins text-lg md:text-xl text-black pt-5 leading-relaxed max-w-[800px]">
                        Welcome to <strong>Lush Cleaning</strong>, a professional cleaning company that provides a range of cleaning services to the Sutherland Shire and surrounding areas. We are a family-owned and operated business that prides itself on providing high-quality service at an affordable price. Our team of experienced cleaners is dedicated to delivering exceptional results, ensuring that your home or office is left sparkling clean. Whether you need a one-off clean or regular cleaning services, we have the expertise and equipment to get the job done. 
                    </p>
                    <p className="font-poppins text-lg md:text-xl text-black leading-relaxed max-w-[800px] mt-4">
                        Contact us today to find out more about our services and how we can help you keep your space clean and tidy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
