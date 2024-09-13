import React, { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import Theme from "./Theme";
import Logo from "../assets/Logo";

const Navbar = ({ currentLanguage, onLanguageChange }) => {
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
            {currentLanguage === "en" ? "About" : "Sobre mi"}
          </a>
          <a
            href="#skills"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {currentLanguage === "en" ? "Tech Stack" : "Tecnologías"}
          </a>
          <a
            href="#experience"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {currentLanguage === "en" ? "Experience" : "Experiencia"}
          </a>
          <a
            href="#projects"
            className="font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-white bg-cherry-text hover:text-cherry-title focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:text-dracula-text focus:outline-none dark:focus:ring-dracula-text-900"
          >
            {currentLanguage === "en" ? "Projects" : "Proyectos"}
          </a>
        </div>

        {/* Selección de idioma y tema (ocultos en móvil) */}
        <div className="flex self-end">
          <div className="language-toggle p-2">
            <LanguageSelector setLanguage={onLanguageChange} />
          </div>
          <div className="theme-toggle p-2">
            <Theme />
          </div>
          <div className="magic-toggle p-2">
            <button className="w-full px-4 py-2 text-sm font-medium rounded-md shadow-sm hover:outline-none text-white bg-cherry-text hover:text-cherry-title hover:ring-4 hover:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:bg-opacity-5 dark:text-dracula-text dark:hover:ring-dracula-text-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  fill="currentColor"
                  d="m88.418 17.17l-66.12 475.242h18.866l66.12-475.242H88.42zm315.7 0l66.023 475.242h18.87L422.988 17.17zm-56.26.24l-132.422.37c-59.343 41.506-78.325 97.982-61.596 168.03c-22.324-31.34-32.747-63.248-33.59-98.234l-26.684 191.78c1.05-3.64 2.25-7.31 3.653-11.012l-3.843 12.385l-4.934 35.454c.41 37.954 18.614 69.416 40.91 87.406c-18.52-6.774-35.355-15.287-49.25-27.445l-9.207 66.152c43.032 20.635 88.614 24.346 120.56 17.78c-33.542 18.813-71.344 29.428-125.382 16.886l-2.13 15.3h217.568c73.664-14.515 117.318-55.617 129.045-89.216c3.54 30.568-2.754 60.093-37.473 89.215h73.242l-41.553-299.11c-15.226-35.307-51.106-59.122-74.695-59.718c10.876-3.615 21.615-5.918 32.305-5.78c11.61.15 23.16 3.2 34.76 10.56l-4.207-30.278c-21.365-18.958-46.472-31.023-68.92-35.954c6.54-.477 13.043-.73 19.513-.685c15.23.104 30.273 1.868 45.18 6.21l-4.224-30.398C331.8 45.105 287.813 60.384 263.44 79.407c13.68-23.55 44.533-47.68 84.417-61.998zm-81.323 33.065c-68.785 37.085-71.87 82.26-36.1 122.146c-7.626-69.52 80.94-110.016 118.96-59.032c-40.867-20.17-77.79 7.84-76.21 47.723c23.234-23.997 98.678-13.267 79.795 36.19c-11.3-33.297-56.74-30.094-63.648-13.77c-14.75 34.866 64.34 14.582 98.117 66.284c-18.85-10.875-47.74.482-39.22 14.59c32.28 53.45 84.53 113.185 13.3 147.025c23.57-38.677 10.786-65.734-21.85-81.43c25.644 66.744-5.1 163.717-103.81 133.19c62.83-11.442 78.355-62.576 57.263-83.425c-23.617 60.37-122.14 97.174-181.444 38.453c58.693 22.535 99.285 7.31 120.644-26.39c-35.89 21.435-95.375 6.933-113.994-42.977c28.694 29.187 67.102 37.963 91.195 20.356c13.217-9.658 8.303-25.06-8.55-29.402c-24.53-6.32-61.988-12.852-76.563-36.588c21.722 6.003 43.444 10.698 65.166-3.375c-33.985-22.07-81.546-50.75-50.348-100.278c1.008 35.15 17.23 56.557 53.197 48.254c9.285-2.142 16.8-15.472 8.55-23.373c-61.138-58.54-47.58-160.406 65.548-174.168z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
