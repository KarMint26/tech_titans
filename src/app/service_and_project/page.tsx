import { Metadata } from "next";
import React from "react";
import ServiceAndProjectPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "SERVICES",
  description:
    "Provides IT Solutions Services for Website and Mobile Apps Development and Consulting Related to IT Products.",
};

const ServiceProject = () => {
  return (
    <React.Fragment>
      <ServiceAndProjectPage />
    </React.Fragment>
  );
};

export default ServiceProject;
