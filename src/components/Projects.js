import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext"; // Asegúrate de que la ruta sea correcta

const Projects = ({ language }) => {
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
      console.error("Error fetching About data:", error);
    }
  }, [language, getCollectionData]);

  if (projects.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="projects-section p-4">
      <h2 className="text-2xl font-bold mb-4">
        {language === "en" ? "Projects" : "Proyectos"}
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card mb-4 p-4 bg-gray-100">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          {project.imageUrl && (
            <img src={project.imageUrl} alt={project.name} className="my-2" />
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {language === "en" ? "View Project" : "Ver Proyecto"}
            </a>
          )}
          <h4 className="text-lg font-medium mt-2">Technologies:</h4>
          <ul className="list-disc ml-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
