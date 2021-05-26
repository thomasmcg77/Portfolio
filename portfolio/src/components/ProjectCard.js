import React from "react";
import "./ProjectCard.css";
import arduinoImg from "./arduino.png";
import noaaImg from "./noaa_thumbnail.png";

function ProjectCard({projectName, projectType, projectDescription}) {
  const projectTypes = ['arduino', 'raspberry pi', 'java', 'react']
  const thumbnail = noaaImg;

  return (
    <div className="card">
      <h2>{projectName}</h2>
      <h3>{projectDescription}</h3>
    </div>
  );
}

export default ProjectCard;
