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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
