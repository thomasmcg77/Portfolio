import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import ProjectCard from "./components/ProjectCard.js";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Poppins:wght@200&display=swap');
      </style>
      <Header />
      <div className="body">
        <div className="card-container">
          <ProjectCard projectName="NOAA Satellite Receiver" projectType="Raspberry Pi" projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <ProjectCard projectName="Garduino" projectType="Arduino" projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <ProjectCard projectName="SimpleWeather" projectType="Reactjs" projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
