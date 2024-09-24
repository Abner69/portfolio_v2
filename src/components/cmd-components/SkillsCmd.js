import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";

export default function SkillsCmd() {
  //Language Context
  const { language } = useLanguage();
  //Data Context
  const { getCollectionData } = useData();
  //Data for this container
  const [skills, setSkills] = useState([]);

  //Fetching data from db
  useEffect(() => {
    const skillsDataFromContext = getCollectionData("profile");
    try {
      if (skillsDataFromContext.length) {
        const filteredSkills = skillsDataFromContext.filter(
          (doc) => doc.component === "Skills"
        );
        setSkills(filteredSkills.length > 0 ? filteredSkills[0].skills : []);
      }
    } catch (error) {
      console.error("Error fetching Skills data:", error);
    }
  }, [language, getCollectionData]);

  //Skeleton if not fecth data
  if (skills.length === 0) {
    return <div>{language === "en" ? "No Skills" : "No hay Tecnologías"}</div>;
  }

  return (
    //Container for Skills in CMD
    <div className="flex flex-col text-lg text-swmg-cmdtext-100">
      <span className="text-center text-swmg-cmdtext">
        {language === "en" ? "Tech Stack" : "Conocimientos Tecnologicos"}
      </span>
      <hr className="border-swmg-display" />
      {skills.map((skill, index) => (
        <div key={index}>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Technology: " : "Tecnología: "}
            <span className="text-swmg-cmdtext-100">{skill.name}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Knowlegde: " : "Conocimiento: "}
            <span className="text-swmg-cmdtext-100">{skill.percentage}%</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Years: " : "Años: "}
            <span className="text-swmg-cmdtext-100">{skill.years}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Using in: " : "Usado en: "}
            <span className="text-swmg-cmdtext-100">
              {skill.nProjects}
              {language === "en"
                ? skill.nProjects > 1
                  ? " projects"
                  : " project"
                : skill.nProjects > 1
                ? " proyectos"
                : " proyecto"}
            </span>
          </span>
          <hr className="border-swmg-display" />
        </div>
      ))}
    </div>
  );
}
