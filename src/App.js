import "./App.css";
import NavBar from "../src/components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import { DataProvider } from "./context/DataContext";
import { WizardProvider } from "./context/WizardContext";
import { LanguageProvider } from "./context/LanguageContext";
const App = () => {
  return (
    <div className="dark:bg-dracula-bg">
      <LanguageProvider>
        <DataProvider>
          <WizardProvider>
            <NavBar />
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
          </WizardProvider>
        </DataProvider>
      </LanguageProvider>
    </div>
  );
};

export default App;
