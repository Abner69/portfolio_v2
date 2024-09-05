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
    <div className="projects-section p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 flex w-full justify-center">
        {language === "en" ? "Projects" : "Proyectos"}
      </h2>
      <div className="carousel rounded-box w-72 self-center p-4">
        {projects.map((project, index) => (
          <div className="carousel-item w-full" key={index}>
            <div
              data-theme="mytheme"
              className="card bg-secondary w-80 shadow-xl"
            >
              <figure className="w-full h-32 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={project.imageUrl}
                  alt={project.name || "Company"}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <h3 className="text-sm text-gray-600">{project.year}</h3>
                <p>{project.description}</p>
                <p>
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
                </p>
                <div className="mt-2">
                  {project.technologies &&
                    project.technologies.map((tech, index) => (
                      <div className="badge badge-ghost m-1" key={index}>
                        {tech}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
