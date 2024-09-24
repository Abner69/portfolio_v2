import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";

export default function SkillsCmd() {
  const { language } = useLanguage();
  const { getCollectionData } = useData();
  const [skills, setSkills] = useState([]);

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
  return (
    <div className="flex flex-col text-swmg-cmdtext-100 text-lg">
      <span className="text-swmg-cmdtext text-center">
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
