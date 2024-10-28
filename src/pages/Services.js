import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; 
import Services from "../components/Services/serviceDetails";

function About() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 }, // Start slightly lower (30px down)
    animate: { opacity: 1, y: 0 },  // Move to original position
  };

  // Create a ref for the Services component
  const servicesRef = useRef(null);
  // Use inView hook to detect visibility
  const isServicesInView = useInView(servicesRef, { margin: "0px", once: false });

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Services Section with Animation */}
      <motion.div
        ref={servicesRef}
        initial="initial"
        animate={isServicesInView ? "animate" : "initial"} // Animate based on visibility
        variants={fadeIn} // Use the fadeIn animation variants
        transition={{ duration: 0.8 }} // Animation duration
        className="w-full flex justify-center"
      >
        <Services />
      </motion.div>
    </div>
  );
}

export default About;
