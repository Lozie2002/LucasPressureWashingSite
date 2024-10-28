import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Gallery from "../components/Gallery/galleryPhoto";

function About() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 }, // Start off transparent and slightly down
    animate: { opacity: 1, y: 0 },   // End state: fully visible and in place
  };

  return (
    <div className="bg-white min-h-screen">
      <motion.div
        initial="initial"      // Set initial state
        animate="animate"      // Set animate state
        variants={fadeIn}      // Use the fadeIn variants
        transition={{ duration: 0.8 }} // Animation duration
      >
        <Gallery />
      </motion.div>
    </div>
  );
}

export default About;
