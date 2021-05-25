import React from "react";
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

                  .typeString("Hello, world.")

                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(300)
                  .typeString("I am")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Thomas X Mcgui")
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
          <button class="dropbtn">Projects</button>
            <div class="dropdown-content">
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="social">
            <LinkedInIcon
              className="icon"
              fontSize="large"
              href="https://github.com/thomasmcg77"
            />
            <GitHubIcon
              className="icon"
              fontSize="large"
              href="https://github.com/thomasmcg77"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
