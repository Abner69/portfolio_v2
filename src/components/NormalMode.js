import React from "react";
import About from "./About";
import Navbar from "./NavBar";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

export default function NormalMode() {
  return (
    <div>
      <Navbar />
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="certifications">
        <Certifications />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
