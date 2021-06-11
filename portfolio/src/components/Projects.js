import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.js";

function Projects() {
  return (
    <div className="projects">
      <div className="card-container">
        <div className="home-row">
          <ProjectCard
            projectName="gpsafe."
            projectType="Arduino, Reactjs"
            projectLink="https://github.com/thomasmcg77"
            projectDescription="DISCLAIMER: JUST BEGAN PROJECT. GPSafe will use an Arduino with a lte shield. the Arduino will use dweet.io to send data to the cloud. there will be a website to display the current location of the device. the idea is to use it as a tracker in your car or bag in case of the event that it gets stolen. the arduino code will be written in C and the website will be developed with reactjs."
          />
          <ProjectCard
            projectName="simple weather."
            projectType="Reactjs"
            projectLink="https://github.com/thomasmcg77/simpleweather"
            projectDescription="simple weather is a weather website that shows the weekly forcast. it uses the OpenWeatherMap api to get the weather data. written in reactjs using the Ant Design ui library."
          />
          <ProjectCard
            projectName="connect 4."
            projectType="Java"
            projectLink="https://github.com/thomasmcg77/Connect4"
            projectDescription="this connect 4 game was developed using java and its swing api. It was made in colaberation with Robert Lanier and Katherine Sweet."
          />
        </div>
        <div className="home-row">
          <ProjectCard
            projectName="easy grow."
            projectType="Reactjs"
            projectLink="https://github.com/thomasmcg77/easygrow"
            projectDescription="easy grow is a test e-commerce website that 'sells' smart grow technologies. the general design and layout is based off of the amazon website. it was created using reactjs and the material ui library. it also includes payment functionality with stripe."
          />
          <ProjectCard
            projectName="garduino."
            projectType="Arduino, C"
            projectLink="https://github.com/thomasmcg77"
            projectDescription="garduino is an automated plant watering system. it uses an arduino with C code to read data from a moisture sensor and run a water pump when needed."
          />
          <ProjectCard
            projectName="noaa satellite receiver."
            projectType="Raspberry Pi"
            projectLink="https://github.com/thomasmcg77/NOAA_Satellite_Reciever"
            projectDescription="this project uses a handmade quadrifilar helix antenna to receive signals from overpassing satellites. the signals are sent to a raspberry pi using a software defined radio. the raspberry pi uses bash scripts to determine times to read data and automate the signal reading process, then saves the images for viewing."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
