import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useData } from "../context/DataContext";

export default function ProjectCmd() {
  const { language } = useLanguage();
  const { getCollectionData } = useData();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsDataFromContext = getCollectionData("projects");
    try {
      if (projectsDataFromContext.length) {
        const filteredProjects = projectsDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "Project"
        );
        setProjects(filteredProjects);
      }
    } catch (error) {
      console.error("Error fetching Project data:", error);
    }
  }, [language, getCollectionData]);
  if (projects.length === 0) {
    return <div>{language === "en" ? "No Projects" : "No hay Proyectos"}</div>;
  }
  return (
    <div className="flex flex-col text-swmg-cmdtext-100 text-lg">
      <span className="text-swmg-cmdtext text-center">
        {language === "en" ? "Projects" : "Proyectos"}
      </span>
      <hr className="border-swmg-display" />
      {projects.map((project, index) => (
        <div key={index}>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Project Name: " : "Nombre del Proyecto: "}
            <span className="text-swmg-cmdtext-100">{project.name}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Year: " : "Año: "}
            <span className="text-swmg-cmdtext-100">{project.year}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Description: " : "Descripción: "}
            <span className="text-swmg-cmdtext-100">{project.description}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Link: " : "Enlace: "}
            <span className="text-swmg-cmdtext-100">{project.link}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Technologies: " : "Tecnologias: "}
            {project.technologies &&
              project.technologies.map((tech, index) => (
                <span className="text-swmg-cmdtext-100 px-1" key={index}>
                  {tech} {project.technologies.length !== index + 1 ? "-" : ""}
                </span>
              ))}
          </span>
          <hr className="border-swmg-display" />
        </div>
      ))}
    </div>
  );
}
