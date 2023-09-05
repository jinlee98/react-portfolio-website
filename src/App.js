import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";
import Background from "./background/Background.js";
import AboutMe from "./aboutMe/AboutMe.js";
import Loader from "react-loaders";
import "./styles/aboutMenu.scss";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Background />
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <AboutMe />
      </Router>
      <Loader type="pacman" />
    </>
  );
}

export default App;
