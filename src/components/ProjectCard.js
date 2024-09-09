import React from "react";

export default function ProjectCard({ projects, language }) {
  return (
    <div className="carousel rounded-box flex w-full md:justify-center p-8 overflow-x-auto">
      {projects.map((project, index) => (
        <div
          className="carousel-item m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-blue-500 hover:m-4"
          key={index}
        >
          <div className="card w-64 shadow-xl hover:border hover:border-blue-500">
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
  );
}
