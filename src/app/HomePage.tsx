import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import HomeServicesSection from "./HomeServicesSection";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-fit px-8 sm:px-10 lg:px-14 pt-[135px] sm:pt-[150px] lg:pt-[180px] pb-12 sm:pb-16">
        <HomeHeroSection />
      </div>
      <HomeServicesSection />
    </>
  );
};

export default HomePage;
