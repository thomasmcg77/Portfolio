import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.js";

function Projects() {
  return (
    <div className="projects">
      <div className="card-container">
        <div className="home-row">
          <ProjectCard
            projectName="GPSafe"
            projectType="Arduino, Reactjs"
            projectLink="https://github.com/thomasmcg77"
            projectDescription="DISCLAIMER: JUST BEGAN PROJECT. GPSafe will use an Arduino with a lte shield. The Arduino will use dweet.io to send data to the cloud. There will be a website to display the current location of the device. The idea is to use it as a tracker in your car or bag in case of the event that it gets stolen. The arduino code will be written in C and the website will be developed with Reactjs."
          />
          <ProjectCard
            projectName="SimpleWeather"
            projectType="Reactjs"
            projectLink="https://github.com/thomasmcg77/simpleweather"
            projectDescription="DISCLAIMER: STILL IN PROGRESS. SimpleWeather is a weather website that shows the weekly forcast. It uses the OpenWeatherMap API to get the weather data. Written in Reactjs using the Ant Design UI library."
          />
          <ProjectCard
            projectName="Connect 4"
            projectType="Java"
            projectLink="https://github.com/thomasmcg77/Connect4"
            projectDescription="This Connect 4 game was developed using Java and its Swing API. It was made in colaberation with Robert Lanier and Katherine Sweet."
          />
        </div>
        <div className="home-row">
          <ProjectCard
            projectName="Easy Grow"
            projectType="Reactjs"
            projectLink="https://github.com/thomasmcg77/easygrow"
            projectDescription="EasyGrow is a test E-Commerce website that 'sells' smart grow technologies. The general design and layout is based off of the Amazon website. It was created using Reactjs and the Material UI Library. It also includes payment functionality with Stripe."
          />
          <ProjectCard
            projectName="Garduino"
            projectType="Arduino, C"
            projectLink="https://github.com/thomasmcg77"
            projectDescription="Garduino is an automated plant watering system. It uses an arduino with C code to read data from a moisture sensor and run a water pump when needed."
          />
          <ProjectCard
            projectName="NOAA Satellite Receiver"
            projectType="Raspberry Pi"
            projectLink="https://github.com/thomasmcg77/NOAA_Satellite_Reciever"
            projectDescription="This project uses a handmade quadrifilar helix antenna to receive signals from overpassing satellites. The signals are sent to a Raspberry Pi using a software defined radio. The raspberry pi uses bash scripts to determine times to read data and automate the signal reading process, then saves the images for viewing."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
