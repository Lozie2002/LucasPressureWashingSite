import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import ContactForm from "../components/Contact/ContactPage";

function About() {
  // Animation variants for scroll-triggered animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 }, // Start off transparent and slightly down
    visible: { opacity: 1, y: 0 }, // Fully visible and in place when in view
  };

  return (
    <div className="min-h-screen"
    style={{
      backgroundColor: "#B6EDF8"
    }}
    >
      <motion.div
        initial="hidden"           // Initial state
        whileInView="visible"     // Change to visible when in the viewport
        variants={fadeInUp}       // Use the fadeInUp variants
        transition={{ duration: 0.8 }} // Animation duration
        viewport={{ once: false }} // Allow animation to repeat each time it comes into view
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}

export default About;
