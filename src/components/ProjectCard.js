import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ projects }) {
  //Language Context
  const { language } = useLanguage();
  //Hook for card expanding
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    //Carousel Container
    <div className="flex w-full h-full justify-between items-center overflow-x-scroll hide-scrollbar rounded-xl p-8 bg-cherry-main dark:bg-dracula-main">
      {projects.map((project, index) => {
        //Verify if cards are expanded
        const isExpanded = expandedIndex === index;
        return (
          //Card Item
          <div
            className="flex flex-col min-w-60 max-w-60 min-h-96 rounded-xl shadow-xl overflow-hidden m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-cherry-text-500 hover:m-4 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500"
            key={index}
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
          >
            <img
              className="w-full h-32 overflow-hidden"
              src={project.imageUrl}
              alt={project.name || "Company"}
            />

            <div className="flex flex-col items-center p-4">
              <h2 className="font-bold text-center text-xl text-cherry-text dark:text-dracula-text">
                {project.name}
              </h2>
              <p className="text-center text-md text-cherry-subtext dark:text-dracula-subtext">
                {project.year}
              </p>
              <p className="text-sm text-center text-cherry-text-900 dark:text-white">
                {isExpanded
                  ? project.description
                  : language === "en"
                  ? "See Description..."
                  : "Ver Descripción..."}
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
              {isExpanded ? (
                <div className="flex flex-wrap justify-center p-2 mb-1">
                  {project.technologies &&
                    project.technologies.map((tech, idx) => (
                      <div
                        className="font-bold text-xs rounded-2xl m-1 py-1 px-2 text-cherry-text bg-black bg-opacity-5 dark:text-dracula-text-400 dark:bg-white dark:bg-opacity-10"
                        key={idx}
                      >
                        {tech}
                      </div>
                    ))}
                </div>
              ) : (
                <div className="font-bold text-xs rounded-2xl m-1 py-1 px-2 text-cherry-text bg-black bg-opacity-5 dark:text-dracula-text-400 dark:bg-white dark:bg-opacity-10">
                  {language === "en"
                    ? "See Technologies..."
                    : "Ver Tecnologías..."}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
