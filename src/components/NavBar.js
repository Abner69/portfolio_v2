import React, { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import Theme from "./Theme";
import Logo from "../assets/Logo";
import MagicMode from "./MagicMode";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language } = useLanguage();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState("");

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setIsTop("");
      } else if (window.scrollY > lastScrollY) {
        setIsTop("shadow-md");
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    <>
      {/* Navbar */}
      <div
        className={`flex justify-between w-full bg-white dark:bg-dracula-bg sticky top-0 z-50 ${isTop}`}
      >
        <div className="flex justify-start w-full lg:w-auto">
          {/* Botón para abrir el Drawer en móvil */}
          <div className="flex-none lg:hidden"></div>
          <div className="ml-8 mt-2">
            <Logo width={"w-8"} />
          </div>
        </div>

        {/* Enlaces del Navbar (ocultos en móvil) */}
        <div className="hidden lg:flex self-center">
          <a
            href="#about"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {language === "en" ? "About" : "Sobre mi"}
          </a>
          <a
            href="#skills"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {language === "en" ? "Tech Stack" : "Tecnologías"}
          </a>
          <a
            href="#certifications"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {language === "en" ? "Certifications" : "Certificados"}
          </a>
          <a
            href="#experience"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {language === "en" ? "Experience" : "Experiencia"}
          </a>
          <a
            href="#projects"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {language === "en" ? "Projects" : "Proyectos"}
          </a>
        </div>

        {/* Selección de idioma y tema (ocultos en móvil) */}
        <div className="flex self-end">
          <div className="language-toggle p-2">
            <LanguageSelector />
          </div>
          <div className="theme-toggle p-2">
            <Theme />
          </div>
          <MagicMode />
        </div>
      </div>
    </>
  );
};

export default Navbar;
