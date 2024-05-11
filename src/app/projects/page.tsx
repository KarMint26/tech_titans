import { Metadata } from "next";
import React from "react";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "PROJECTS",
  description:
    "Provides IT Solutions Services for Website and Mobile Apps Development and Consulting Related to IT Products.",
};

const Projects = () => {
  return (
    <React.Fragment>
      <ProjectsPage />
    </React.Fragment>
  );
};

export default Projects;
