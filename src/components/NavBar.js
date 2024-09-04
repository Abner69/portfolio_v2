import React from "react";
import { LanguageSelector } from "./LanguageSelector"; // Asegúrate de que la ruta sea correcta
import Theme from "./Theme";
const Navbar = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <button className="btn btn-ghost text-xl">daisyUI</button>
      <div className="language-toggle">
        <LanguageSelector setLanguage={onLanguageChange} />
      </div>
      <div className="theme-toggle">
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
