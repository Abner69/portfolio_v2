import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext"; // Asegúrate de que la ruta sea correcta
import ProjectCard from "./ProjectCard";
import Skeleton from "./Skeleton";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
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
    return <Skeleton language={language} section={"Projects"} />;
  }
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Projects" : "Proyectos"}
      </h2>
      <ProjectCard language={language} projects={projects} />
    </div>
  );
};

export default Projects;
