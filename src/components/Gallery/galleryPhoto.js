import React from "react";

// Commenting out all image imports
// import SolarPhoto from "../../Photos/solarPanel.jpg";
// import PressureWashingPhoto from "../../Photos/ExteriorCleaning.jpg";
// import ConcreteSealingPhoto from "../../Photos/SideWalkCleaning2After.jpg";
// import WindowCleaningPhoto from "../../Photos/WindowCleaning.jpg";
// import RoofCleaningPhoto1 from "../../Photos/RoofCleaning1.jpg";
// import RoofCleaningPhoto2 from "../../Photos/RoofCleaning2.jpg";
// import RoofCleaningPhoto3 from "../../Photos/RoofCleaning3.jpg";
// import SurfaceCleaningPhoto from "../../Photos/SurfaceCleaning.jpg";
// import DrivewayCleaningPhotoBefore from "../../Photos/DrivewayBefore.jpg";
// import DrivewayCleaningPhotoAfter from "../../Photos/DrivewayAfter.jpg";
// import RoofCleaningNew1 from "../../Photos/RoofCleaningNew1.jpg";
// import RoofCleaningNew2 from "../../Photos/RoofCleaningNew2.jpg";

const galleryImages = [
  // { src: SolarPhoto, alt: "Solar Panel Cleaning" },
  // { src: PressureWashingPhoto, alt: "Pressure Washing" },
  // { src: ConcreteSealingPhoto, alt: "Concrete Sealing" },
  // { src: WindowCleaningPhoto, alt: "Window Cleaning" },
  // { src: RoofCleaningPhoto1, alt: "Roof Cleaning 1" },
  // { src: RoofCleaningPhoto2, alt: "Roof Cleaning 2" },
  // { src: RoofCleaningPhoto3, alt: "Roof Cleaning 3" },
  // { src: SurfaceCleaningPhoto, alt: "Surface Cleaning" },
  // { src: DrivewayCleaningPhotoBefore, alt: "Driveway Cleaning Before" },
  // { src: DrivewayCleaningPhotoAfter, alt: "Driveway Cleaning After" },
  // { src: RoofCleaningNew1, alt: "Roof Cleaning New 1" },
  // { src: RoofCleaningNew2, alt: "Roof Cleaning New 2" },
];

// Function to shuffle the array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function GallerySection() {
  // Shuffle images for random layout
  const shuffledImages = shuffleArray([...galleryImages]);

  return (
    <div className="flex items-center justify-center w-full bg-white py-0 min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-screen-lg px-0">
        {/* Section Heading */}
        <h2 className="pb-4 text-5xl font-bold tracking-wide text-black text-center drop-shadow-md">
          Photos From our Recent Jobs
        </h2>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full mt-4">
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
