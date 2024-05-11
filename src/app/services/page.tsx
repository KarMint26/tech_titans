import { Metadata } from "next";
import React from "react";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "SERVICES",
  description:
    "Provides IT Solutions Services for Website and Mobile Apps Development and Consulting Related to IT Products.",
};

const Services = () => {
  return (
    <React.Fragment>
      <ServicesPage />
    </React.Fragment>
  );
};

export default Services;
