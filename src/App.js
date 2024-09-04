import React, { useState } from "react";
import NavBar from "../src/components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { DataProvider } from "./context/DataContext";
const App = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <DataProvider>
        <NavBar
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
        />
        <About language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Footer language={language} />
      </DataProvider>
    </div>
  );
};

export default App;
