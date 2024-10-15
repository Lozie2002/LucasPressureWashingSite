import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Location from "../components/Location";
import Services from "../components/servicesBasic";
import Reviews from "../components/reviews";

function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Services />
      <Location />
      <Reviews />
    </div>
  );
}

export default Home;
