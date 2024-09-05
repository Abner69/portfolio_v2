import React from "react";
import { LanguageSelector } from "./LanguageSelector"; // Asegúrate de que la ruta sea correcta
import Theme from "./Theme";
const Navbar = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <button className="btn btn-ghost text-xl">daisyUI</button>
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
  );
};

export default Navbar;
