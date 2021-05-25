import React, { useState } from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import linkedIn from "./animatedLinkedInIcon.svg";

function Header() {
  const [current, setCurrent] = useState("About");

  function handleAbout() {
    setCurrent("About");
  }

  function handleProjects() {
    setCurrent("Projects");
  }

  function handleContact() {
    setCurrent("Contact");
  }

  return (
    <div>
      <header>
        <div className="header-left">
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Hello, world.")

                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(300)
                  .typeString("I am")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Thomas Mcgui")
                  .pauseFor(300)
                  .deleteChars(3)
                  .pauseFor(300)
                  .typeString("Guigan.")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="header-middle">
          <div class="dropdown">
            <button class="dropbtn">{current}</button>
            <div class="dropdown-content">
              <a href="/about" onClick={handleAbout}>
                About
              </a>
              <a href="/projects" onClick={handleProjects}>
                Projects
              </a>
              <a href="/contact" onClick={handleContact}>
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="social">
            <a href="https://www.linkedin.com/in/thomas-mcguigan">
              <LinkedInIcon className="icon" fontSize="large" />
            </a>
            <a href="https://github.com/thomasmcg77">
              <GitHubIcon className="icon" fontSize="large" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
