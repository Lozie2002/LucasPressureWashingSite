import React from "react";
import SolarPhoto from "../../FPhotos/solarPanel.jpg"
import PressureWashingPhoto from "../../FPhotos/ExteriorCleaning.jpg"
import ConcreteSealingPhoto from "../../FPhotos/SideWalkCleaning2After.jpg"
import WindowCleaningPhoto from "../../FPhotos/WindowCleaning.jpg"
import RoofCleaningPhoto1 from "../../FPhotos/RoofCleaning1.jpg"
import RoofCleaningPhoto3 from "../../FPhotos/RoofCleaning3.jpg"
import SurfaceCleaningPhoto from "../../FPhotos/SurfaceCleaning.jpg"

function Services() {
  return (
    <div className="flex flex-col items-start justify-start relative overflow-hidden w-full bg-white">
      {/* Center the heading and paragraph */}
      <h1 className="text-gray-900 font-bold text-4xl my-8 text-center w-full">
        Our Services
      </h1>

      {/* Introduction section */}
      <p className="text-gray-700 text-left mb-6 max-w-4xl self-center">
        We offer a range of high-quality cleaning services tailored to keep your
        home or business looking its best. Whether it's pressure washing,
        window cleaning, or solar panel maintenance, we've got you covered.
      </p>

      {/* Service descriptions remain left-aligned */}
      <div className="z-20 flex flex-col items-start gap-6 m-4 w-full max-w-5xl mx-auto">
        
        {/* Solar Panel Cleaning */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Solar Panel Cleaning
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Clean solar panels improve energy efficiency (up to 20%) by removing
              bird droppings, dust, and algae buildup. Regular cleaning also helps
              maintain the longevity of your panels.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Increased energy output, reduced wear on panels, and improved aesthetics.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> Our team uses specialized equipment and eco-friendly cleaning solutions to ensure thorough cleaning without damaging the panels.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={SolarPhoto} // Replace with your image path
              alt="Solar Panel Cleaning"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Pressure Washing */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Pressure Washing
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Pressure washing removes stubborn stains, grime, mould, and algae,
              which are possible slip hazards. It restores surfaces to their
              original appearance and enhances curb appeal.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Improved safety, enhanced appearance, and increased property value.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> We utilize high-pressure water jets to effectively clean a variety of surfaces, including driveways, decks, and siding.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={SurfaceCleaningPhoto} // Replace with your image path
              alt="Pressure Washing"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Concrete Sealing */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Concrete Sealing
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Sealing your concrete creates a barrier against water infiltration,
              moisture damage, and pollutants like oil and grease. This barrier
              reduces the chance of cracking and spalling.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Prolongs the lifespan of your concrete surfaces, enhances color, and prevents staining.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> Our sealing process involves cleaning the surface, applying a high-quality sealant, and ensuring proper curing.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={ConcreteSealingPhoto} // Replace with your image path
              alt="Concrete Sealing"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Window Cleaning */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Window Cleaning
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Clean windows allow more sunlight to enter your home, improving
              clarity and making your home feel brighter. It prevents grime buildup
              and extends the lifespan of your windows.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Enhanced natural light, improved aesthetics, and increased property value.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> We use a combination of traditional methods and modern equipment to ensure streak-free results.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={WindowCleaningPhoto} // Replace with your image path
              alt="Window Cleaning"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Gutter Cleaning */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Gutter Cleaning
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Gutter cleaning prevents water damage by ensuring rainwater flows
              freely through the drainage system, protecting your home’s foundation
              and exterior, and reducing the risk of pests and mould.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Prevents water damage, pest infestations, and reduces the need for costly repairs.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> Our team removes debris from gutters and downspouts, ensuring proper flow, and checks for any damages.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={RoofCleaningPhoto3} // Replace with your image path
              alt="Gutter Cleaning"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Soft Washing */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Soft Washing
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Soft washing revives and restores your building’s appearance. It
              removes contaminants like mildew, stains, mould, and algae from
              external surfaces, leaving your home looking new.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Safe for delicate surfaces, prolongs the lifespan of paint and siding, and enhances curb appeal.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> We use low-pressure water combined with specialized detergents to safely clean surfaces.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={PressureWashingPhoto} // Replace with your image path
              alt="Soft Washing"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Roof Washing */}
        <div className="flex flex-col lg:flex-row p-6 rounded-lg w-full bg-gray-100 shadow-md">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Roof Washing
            </h2>
            <p className="text-gray-600 text-left mb-2">
              Our roof washing service removes mould and mildew to preserve your
              roof's structure while enhancing its appearance, making it look
              brighter and more vibrant.
            </p>
            <p className="text-gray-600 text-left">
              <strong>Benefits:</strong> Extends the lifespan of your roof, improves energy efficiency, and enhances aesthetics.
            </p>
            <p className="text-gray-600 text-left mt-1">
              <strong>Process:</strong> We use a combination of soft washing techniques and eco-friendly products to clean roofs without causing damage.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={RoofCleaningPhoto1} // Replace with your image path
              alt="Roof Washing"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
