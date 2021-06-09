import React from "react";
import "./ProjectCard.css";

function ProjectCard({
  projectName,
  projectType,
  projectDescription,
  projectLink,
}) {

  return (
    <div className="card">
      <a href={projectLink}>
        <h2>{projectName}</h2>
        <h3>{projectDescription}</h3>
      </a>
    </div>
  );
}

export default ProjectCard;
