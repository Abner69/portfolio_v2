import React, { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import Theme from "./Theme";
import logo from "../assets/logo.png";

const Navbar = ({ currentLanguage, onLanguageChange }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState("");

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      console.log(window.scrollY);
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
  }); // Dependencia de lastScrollY para que se actualice correctamente

  return (
    <div className="drawer sticky top-0 z-40 transition-transform duration-300">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className={`navbar max-h-0 w-full bg-secondary ${isTop}`}>
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer"
                aria-label="open drawer"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <img alt="logo" src={logo} className="w-8 ml-8" />
          </div>

          <div className="navbar-center hidden lg:flex">
            <a href="#about" className="btn btn-ghost normal-case text-lg">
              About
            </a>
            <a href="#skills" className="btn btn-ghost normal-case text-lg">
              Skills
            </a>
            <a href="#experience" className="btn btn-ghost normal-case text-lg">
              Experience
            </a>
            <a href="#projects" className="btn btn-ghost normal-case text-lg">
              Projects
            </a>
          </div>

          <div className="navbar-end">
            <div className="language-toggle p-2">
              <LanguageSelector setLanguage={onLanguageChange} />
            </div>
            <div className="theme-toggle p-2">
              <Theme />
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      <div className="drawer-side z-50">
        {" "}
        {/* Asegura que el drawer esté encima con z-index */}
        <label
          htmlFor="my-drawer"
          aria-label="close drawer"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
