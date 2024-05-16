import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import HomeServicesSection from "./HomeServicesSection";
import HomeClientsSection from "./HomeClientsSection";
import HomeProjectsSection from "./HomeProjectsSection";
import HomeTestimonialsSection from "./HomeTestimonialsSection";
import HomeFAQSection from "./HomeFAQSection";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen px-5 sm:px-10 lg:px-14 pt-[135px] sm:pt-[150px] lg:pt-[180px] pb-12 sm:pb-16">
        <HomeHeroSection />
      </div>
      <HomeServicesSection />
      <HomeClientsSection />
      <HomeProjectsSection />
      <HomeTestimonialsSection />
      <HomeFAQSection />
    </>
  );
};

export default HomePage;
