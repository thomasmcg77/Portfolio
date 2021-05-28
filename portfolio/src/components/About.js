import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="text-container">
        <div className="info-container">
          <h2>about me.</h2>
          <p>
            i am a student at saint louis university pursuing a b.s. in computer
            science. my goal is to one day build my own business from the ground
            up; however, i am looking to build up my skills until that time
            comes. i am particularly interested in full stack development with
            an emphasis on iot and web development. if you are interested in
            hiring me or want to collaborate on a project,{" "}
            <a href="/contact">contact me</a>. On a more non-tech related note,
            I am very interested in space exploration and really anything that
            involves science. Something I have recently become fascinated with
            is the polar regions and their inhospitable environments.
          </p>
        </div>
        <div className="info-container">
          <h2>languages.</h2>
          <p>
            proficient: c, c++, css, git, html, java, javascript, python,
            reactjs
          </p>
          <p>knowledge of: ARM ASM, c#, matlab</p>
        </div>
        <div className="info-container">
          <h2>software.</h2>
          <p>
            arcgis pro, blender, creo, davinci resolve, github, gradle, unreal
            engine, vscode
          </p>
        </div>
        <div className="info-container">
          <h2>hardware.</h2>
          <p>arduino, raspberry pi</p>
        </div>
      </div>
    </div>
  );
}

export default About;
