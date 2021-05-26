import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Poppins:wght@200&display=swap');
      </style>
      <Header />
      <Router>
        <div className="body">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="footer"></div>
    </div>
  );
}

export default App;
