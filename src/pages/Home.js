import React from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import { useRef } from "react"; // Import useRef for reference
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import Location from "../components/Home/Location";
import Services from "../components/Home/servicesBasic";
import Reviews from "../components/Home/reviews";

function Home() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 }, // Start slightly lower (30px down)
    animate: { opacity: 1, y: 0 }, // Move to original position
  };

  // Create refs for each section
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const locationRef = useRef(null);
  const reviewsRef = useRef(null);

  // Use inView hook to detect visibility
  const isHeroInView = useInView(heroRef, { margin: "0px", once: false });
  const isIntroInView = useInView(introRef, { margin: "0px", once: false });
  const isServicesInView = useInView(servicesRef, { margin: "0px", once: false });
  const isLocationInView = useInView(locationRef, { margin: "0px", once: false });
  const isReviewsInView = useInView(reviewsRef, { margin: "0px", once: false });

  return (
    <div>
      {/* Hero Section with Animation */}
      <motion.div
        ref={heroRef}
        initial="initial"
        animate={isHeroInView ? "animate" : "initial"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Introduction Section with Animation */}
      <motion.div
        ref={introRef}
        initial="initial"
        animate={isIntroInView ? "animate" : "initial"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.1 }} // Reduced delay for smooth transition
      >
        <Introduction />
      </motion.div>

      {/* Services Section with Animation */}
      <motion.div
        ref={servicesRef}
        initial="initial"
        animate={isServicesInView ? "animate" : "initial"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.2 }} // Slightly less delay
      >
        <Services />
      </motion.div>

      {/* Location Section with Animation */}
      <motion.div
        ref={locationRef}
        initial="initial"
        animate={isLocationInView ? "animate" : "initial"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.3 }} // Further reduced delay
      >
        <Location />
      </motion.div>

      {/* Reviews Section with Animation */}
      <motion.div
        ref={reviewsRef}
        initial="initial"
        animate={isReviewsInView ? "animate" : "initial"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.4 }} // Reduced delay for staggered effect
      >
        <Reviews />
      </motion.div>
    </div>
  );
}

export default Home;
