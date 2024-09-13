import React from "react";

export default function ProjectCard({ projects, language }) {
  return (
    <div className="rounded-box flex w-full md:justify-center rounded-xl p-4 overflow-x-auto bg-cherry-main dark:bg-dracula-main">
      {projects.map((project, index) => (
        <div
          className="carousel-item m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-cherry-text-500 hover:m-4 dark:hover:border-dracula-text-500"
          key={index}
        >
          <div className="flex flex-col min-h-96 w-52 rounded-xl overflow-hidden bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 shadow-xl hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500">
            <figure className="w-full h-32 overflow-hidden">
              <img
                className="w-full h-full self-center"
                src={project.imageUrl}
                alt={project.name || "Company"}
              />
            </figure>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-cherry-text dark:text-dracula-text">
                {project.name}
              </h2>
              <p className="text-md text-cherry-subtext self-center text-center dark:text-dracula-subtext">
                {project.year}
              </p>
              <p className="text-sm text-cherry-text-900 dark:text-white">
                {project.description}
              </p>
              <p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cherry-text-900 dark:text-dracula-text-900"
                  >
                    {language === "en" ? "View Project" : "Ver Proyecto"}
                  </a>
                )}
              </p>
              <div className="flex p-2 flex-wrap mb-1">
                {project.technologies &&
                  project.technologies.map((tech, index) => (
                    <div
                      className="font-bold text-xs m-1 py-1 px-2 text-cherry-text bg-black bg-opacity-5 dark:text-dracula-text-400 dark:bg-white dark:bg-opacity-10 rounded-2xl"
                      key={index}
                    >
                      {tech}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
