import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext"; // Asegúrate de que la ruta sea correcta
import ProjectCard from "./ProjectCard";
import Skeleton from "./skeleton-components/Skeleton";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  //Language Context
  const { language } = useLanguage();
  //Data context
  const { getCollectionData } = useData();
  //Data for this component
  const [projects, setProjects] = useState([]);

  //Data fetching from db
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
    return <Skeleton language={language} section={"Projects"} />;
  }
  return (
    //Cotainer Projects Section
    <div className="flex flex-col items-center p-4">
      {/*Title for Projects */}
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Projects" : "Proyectos"}
      </h2>
      {/*Project Cards */}
      <ProjectCard language={language} projects={projects} />
    </div>
  );
};

export default Projects;
