import React, { useState } from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import linkedIn from "./animatedLinkedInIcon.svg";

function Header() {
  return (
    <div>
      <header>
        <div className="header-left">
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("hello, world.")

                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(300)
                  .typeString("i am")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("thomas x mcguigan.")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="header-middle">
          <div class="dropdown">
            <button class="dropbtn">me.</button>
            <div class="dropdown-content">
              <a href="/about">about.</a>
              <a href="/projects">projects.</a>
              <a href="/contact">contact.</a>
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
