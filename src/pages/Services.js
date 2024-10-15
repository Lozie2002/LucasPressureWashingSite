import React from "react";

function Project() {
  return (
    <div className="flex flex-col items-start justify-start relative overflow-hidden w-full bg-gradient-to-r from-blue-500 to-blue-700">
      {/* Center the heading and paragraph */}
      <h1 className="text-gray-200 font-medium text-4xl my-6 text-center w-full">
        Our Services
      </h1>
      

        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Solar Panel Cleaning</h2>
          <p className="text-gray-300 text-left">
            Clean solar panels improve energy efficiency (up to 20%) by removing
            bird droppings, dust, and algae buildup. Regular cleaning also helps
            maintain the longevity of your panels.
            </p>
          <p className="text-gray-300 text-center mb-6 max-w-4xl self-center">
        We offer a range of high-quality cleaning services tailored to keep your
        home or business looking its best. Whether it's pressure washing,
        window cleaning, or solar panel maintenance, we've got you covered.
      </p>
      
      {/* Service descriptions remain left-aligned */}
      <div className="z-20 flex flex-col items-start gap-6 m-4 w-full max-w-lg">
        {/* Service descriptions */}
        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Pressure Washing</h2>
          <p className="text-gray-300 text-left">
            Pressure washing removes stubborn stains, grime, mould, and algae,
            which are possible slip hazards. It restores surfaces to their
            original appearance and enhances curb appeal.
          </p>
        </div>

        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Concrete Sealing</h2>
          <p className="text-gray-300 text-left">
            Sealing your concrete creates a barrier against water infiltration,
            moisture damage, and pollutants like oil and grease. This barrier
            reduces the chance of cracking and spalling.
          </p>
        </div>

        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Window Cleaning</h2>
          <p className="text-gray-300 text-left">
            Clean windows allow more sunlight to enter your home, improving
            clarity and making your home feel brighter. It prevents grime buildup
            and extends the lifespan of your windows.
          </p>
        </div>

        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Gutter Cleaning</h2>
          <p className="text-gray-300 text-left">
            Gutter cleaning prevents water damage by ensuring rainwater flows
            freely through the drainage system, protecting your home’s foundation
            and exterior, and reducing the risk of pests and mould.
          </p>
        </div>
        </div>

        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Soft Washing</h2>
          <p className="text-gray-300 text-left">
            Soft washing revives and restores your building’s appearance. It
            removes contaminants like mildew, stains, mould, and algae from
            external surfaces, leaving your home looking new.
          </p>
        </div>

        <div className="p-6 rounded-lg w-full bg-white bg-opacity-10">
          <h2 className="text-xl font-semibold text-white mb-2 text-left">Roof Washing</h2>
          <p className="text-gray-300 text-left">
            Our roof washing service removes mould and mildew to preserve your
            roof's structure while enhancing its appearance, making it look
            brighter and more vibrant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
