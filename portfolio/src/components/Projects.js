import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.js";

function Projects() {
  return (
    <div className="card-container">
      <div className="home-row">
        <ProjectCard
          projectName="NOAA Satellite Receiver"
          projectType="Raspberry Pi"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ProjectCard
          projectName="Garduino"
          projectType="Arduino"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ProjectCard
          projectName="SimpleWeather"
          projectType="Reactjs"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
}

export default Projects;
