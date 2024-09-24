import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";

export default function ProjectCmd() {
  //Language Context
  const { language } = useLanguage();
  //Data Context
  const { getCollectionData } = useData();
  //Data for this container
  const [projects, setProjects] = useState([]);

  //Fetching data from db
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

  //Skeleton if not fetch data
  if (projects.length === 0) {
    return <div>{language === "en" ? "No Projects" : "No hay Proyectos"}</div>;
  }

  return (
    //Container for Projects in CMD
    <div className="flex flex-col text-lg text-swmg-cmdtext-100">
      <span className="text-center text-swmg-cmdtext">
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
            {language === "en" ? "Technologies: " : "Tecnologías: "}
            {project.technologies &&
              project.technologies.map((tech, index) => (
                <span className="px-1 text-swmg-cmdtext-100" key={index}>
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
