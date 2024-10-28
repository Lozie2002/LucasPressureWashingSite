import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import WhoIM from "../components/About/WhoIM";

function About() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 }, // Initial state: transparent and slightly moved down
    animate: { opacity: 1, y: 0 },   // Final state: fully visible and in place
  };

  // Create a ref for the WhoIM component
  const whoIMRef = useRef(null);
  // Use inView hook to detect visibility
  const isWhoIMInView = useInView(whoIMRef, { margin: "0px", once: false });

  return (
    <div className="bg-white min-h-screen">
      {/* WhoIM Section with Animation */}
      <motion.div
        ref={whoIMRef} // Attach the ref to the motion.div
        initial="initial" // Set initial state
        animate={isWhoIMInView ? "animate" : "initial"} // Set animate state based on visibility
        variants={fadeIn} // Use the fadeIn variants
        transition={{ duration: 0.8 }} // Animation duration
      >
        <WhoIM />
      </motion.div>
    </div>
  );
}

export default About;
