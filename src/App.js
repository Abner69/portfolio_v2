import React, { useState } from "react";
import NavBar from "../src/components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { DataProvider } from "./context/DataContext";
const App = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Guardar el idioma seleccionado en localStorage
  };

  return (
    <div>
      <DataProvider>
        <NavBar
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
        />
        <div id="about">
          <About language={language} />
        </div>

        <div id="skills">
          <Skills language={language} />
        </div>

        <div id="experience">
          <Experience language={language} />
        </div>

        <div id="projects">
          <Projects language={language} />
        </div>
        <Footer language={language} />
      </DataProvider>
    </div>
  );
};

export default App;
