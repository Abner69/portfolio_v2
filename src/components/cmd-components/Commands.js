import React from "react";
import ProjectCmd from "./ProjectCmd";
import ExperienceCmd from "./ExperienceCmd";
import SkillsCmd from "./SkillsCmd";
import WhoAmi from "./WhoAmi";
import { useLanguage } from "../../context/LanguageContext";
import { useWizard } from "../../context/WizardContext";
import HelpCmd from "./HelpCmd";
import Sudo from "./Sudo";
import Spotify from "./Spotify";
import Steam from "./Steam";
import CertificationsCmd from "./CertificationsCmd";
export default function Commands({ cmd, history }) {
  //Language Context
  const { language, handleLanguageChange } = useLanguage();
  //Wizard Context
  const { toggleWizardState } = useWizard();

  //Options availables in CMD
  switch (cmd.toLowerCase()) {
    case "help":
      return <HelpCmd />;
    case "lang":
      return (
        <div>
          <button
            onClick={() => handleLanguageChange("en")}
            className="text-swmg-cmdtext hover:text-swmg-cmdtext-100"
          >
            {language === "en" ? "English" : "Inglés"}
          </button>
          <br />
          <button
            onClick={() => handleLanguageChange("es")}
            className="text-swmg-cmdtext hover:text-swmg-cmdtext-100"
          >
            {language === "en" ? "Spanish" : "Español"}
          </button>
        </div>
      );
    case "exit":
      return (
        <div>
          <span className="text-swmg-cmdtext-100">
            {language === "en" ? "Are you sure?" : "¿Está seguro?"}
          </span>{" "}
          <button
            onClick={() => toggleWizardState(false)}
            className="text-swmg-cmdtext hover:text-swmg-cmdtext-100"
          >
            {language === "en" ? "Yes" : "Sí"}
          </button>{" "}
          <button className="text-swmg-cmdtext hover:text-swmg-cmdtext-100">
            No
          </button>
        </div>
      );
    case "whoami":
      return <WhoAmi />;
    case "history":
      return history.map((entry, index) => <div key={index}>{entry}</div>);
    case "projects":
      return <ProjectCmd />;
    case "experience":
      return <ExperienceCmd />;
    case "skills":
      return <SkillsCmd />;
    case "certifications":
      return <CertificationsCmd />;
    case "sudo":
      return <Sudo />;
    case "spotify":
      return <Spotify />;
    case "steam":
      return <Steam />;
    default:
      return (
        <span>
          {language === "en"
            ? `Command "${cmd}" not found — Type `
            : `Comando "${cmd}" no encontrado — Escriba `}
          <span class="text-swmg-cmdtext-100">help</span>{" "}
          {language === "en"
            ? "for a list of supported commands."
            : "para ver la lista de comandos."}
        </span>
      );
  }
}
