import React, { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import Theme from "./Theme";
import Logo from "../assets/Logo";
import MagicMode from "./MagicMode";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  //Language Context
  const { language } = useLanguage();
  //Scroll hooks
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState("");
  //Hook for add shadow when the navbar isn't top
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
  //Hook for when the page is scrolling
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    //Navbar container
    <div
      className={`flex justify-between w-full sticky top-0 z-50 ${isTop} bg-white dark:bg-dracula-bg`}
    >
      {/*Logo section in navbar */}
      <div className="flex justify-start ml-8 mt-2">
        <Logo width={"w-8"} />
      </div>

      {/*Navbar section links, hidden in movile */}
      <div className="hidden self-center lg:flex">
        <a
          href="#about"
          className="font-medium text-white text-sm rounded-lg px-5 py-2.5 m-2 bg-cherry-text hover:text-cherry-title focus:outline-none focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {language === "en" ? "About" : "Sobre mí"}
        </a>
        <a
          href="#skills"
          className="font-medium text-white text-sm rounded-lg px-5 py-2.5 m-2 bg-cherry-text hover:text-cherry-title focus:outline-none focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {language === "en" ? "Tech Stack" : "Tecnologías"}
        </a>
        <a
          href="#certifications"
          className="font-medium text-white text-sm rounded-lg px-5 py-2.5 m-2 bg-cherry-text hover:text-cherry-title focus:outline-none focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {language === "en" ? "Certifications" : "Certificaciones"}
        </a>
        <a
          href="#experience"
          className="font-medium text-white text-sm rounded-lg px-5 py-2.5 m-2 bg-cherry-text hover:text-cherry-title focus:outline-none focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {language === "en" ? "Experience" : "Experiencia"}
        </a>
        <a
          href="#projects"
          className="font-medium text-white text-sm rounded-lg px-5 py-2.5 m-2 bg-cherry-text hover:text-cherry-title focus:outline-none focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text dark:focus:ring-dracula-text-900"
        >
          {language === "en" ? "Projects" : "Proyectos"}
        </a>
      </div>

      {/*Navbar Language, Theme and Magic Mode section*/}
      <div className="flex self-end">
        <div className="p-2">
          <LanguageSelector />
        </div>
        <div className="p-2">
          <Theme />
        </div>
        <MagicMode />
      </div>
    </div>
  );
};

export default Navbar;
