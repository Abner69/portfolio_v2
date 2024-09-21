import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function HelpCmd() {
  const { language } = useLanguage();
  return (
    <div className="text-swmg-cmdtext-100 text-lg">
      whoami
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Displays Who I am?" : "Despliega quien soy"}
      </span>
      <br />
      experience
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en"
          ? "Lists my work experience."
          : "Lista mi experiencia"}{" "}
      </span>
      <br />
      projects
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en" ? "View coding projects." : "Lista mis proyectos"}{" "}
      </span>
      <br />
      history
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en"
          ? "View command history."
          : "Lista el historial de comandos"}
      </span>
      <br />
      help
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en"
          ? "Displays this help msg."
          : "Despliega la lista de ayuda"}
      </span>
      <br />
      sudo
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Let's see what happens" : "Veamos que sucede"}
      </span>
      <br />
      clear
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Clear terminal" : "Limpia la terminal"}
      </span>
      <br />
      lang
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Change the language" : "Cambia el lenguaje"}
      </span>
      <br />
      spotify
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en"
          ? "Check my Spotify profile"
          : "Revisa mi perfil de Spotify"}
      </span>
      <br />
      steam
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en"
          ? "Check my Steam profile"
          : "Revisa mi perfil de Steam"}
      </span>
      <br />
      exit
      <br />
      <span className="ml-2">↳</span>&nbsp;
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Exit of the terminal" : "Salir de la terminal"}
      </span>
    </div>
  );
}
