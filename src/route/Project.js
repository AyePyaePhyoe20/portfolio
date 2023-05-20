import React from "react";

import NavBar from "../Component/NavBar";
import HeroImg2 from "../Component/HeroImg2";
import Footer from "../Component/Footer";
import PricingCard from "../Component/PricingCard";
import Work from "../Component/Work";

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />

      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
