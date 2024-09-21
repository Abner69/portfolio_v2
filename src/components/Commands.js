import React from "react";
import ProjectCmd from "./ProjectCmd";
import ExperienceCmd from "./ExperienceCmd";
import SkillsCmd from "./SkillsCmd";
import WhoAmi from "./WhoAmi";
import { useLanguage } from "../context/LanguageContext";
import { useWizard } from "../context/WizardContext";
import HelpCmd from "./HelpCmd";
import Sudo from "./Sudo";
import Spotify from "./Spotify";
import Steam from "./Steam";
export default function Commands({ cmd, history }) {
  const { language, handleLanguageChange } = useLanguage();
  const { toggleWizardState } = useWizard();

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
    case "sudo":
      return <Sudo />;
    case "spotify":
      return <Spotify />;
    case "steam":
      return <Steam />;
    default:
      return (
        <span>
          Command "{cmd}" not found — Type{" "}
          <span class="text-swmg-cmdtext-100">help</span> for a list of
          supported commands.
        </span>
      );
  }
}
