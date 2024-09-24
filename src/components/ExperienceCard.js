import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceCard({ experiences }) {
  //Language Context
  const { language } = useLanguage();
  //Hook for card expanding
  const [expandedIndex, setExpandedIndex] = useState(null);

  //Function to convert dates from db to legible dates
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "N/A";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString();
  };

  return (
    //Carousel Container
    <div className="flex w-full h-full justify-between items-center overflow-x-scroll hide-scrollbar rounded-xl p-8 bg-cherry-main dark:bg-dracula-main">
      {experiences.map((experience, index) => {
        //Verify if cards are expanded
        const isExpanded = expandedIndex === index;
        return (
          //Card Item
          <div
            key={index}
            className="flex flex-col min-w-60 max-w-60 min-h-96 rounded-xl shadow-xl overflow-hidden m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-cherry-text-500 hover:m-4 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500"
            onClick={() => setExpandedIndex(isExpanded ? null : index)} // Cambia el estado al hacer clic
          >
            <img
              className="w-full h-32 overflow-hidden"
              src={experience.imageUrl}
              alt={experience.companyName || "Company"}
            />
            <div className="flex flex-col items-center p-4">
              <h2 className="font-bold text-center text-xl text-cherry-text dark:text-dracula-text">
                {experience.companyName}
              </h2>
              <p className="text-md text-center text-cherry-subtext dark:text-dracula-subtext">
                {experience.role}
              </p>
              <p className="text-md text-center text-cherry-subtext dark:text-dracula-subtext">
                {experience.projectName}
              </p>
              <h3 className="text-sm text-cherry-text-900 dark:text-white">
                {formatDate(experience.startDate)} -{" "}
                {formatDate(experience.endDate)}
              </h3>

              <p className="text-sm text-center text-cherry-text-900 dark:text-white">
                {isExpanded
                  ? experience.description
                  : language === "en"
                  ? "See description..."
                  : "Ver Descripción..."}
              </p>
              {isExpanded ? (
                <ul className="list-disc ml-6 mt-2">
                  {experience.responsibilities &&
                    experience.responsibilities.map((responsibility, idx) => (
                      <li
                        className="text-sm text-cherry-title dark:text-dracula-title"
                        key={idx}
                      >
                        {responsibility}
                      </li>
                    ))}
                </ul>
              ) : language === "en" ? (
                <p className="text-sm text-cherry-title dark:text-dracula-title">
                  See Responsabilities...
                </p>
              ) : (
                <p className="text-sm text-cherry-title dark:text-dracula-title">
                  Ver Responsabilidades...
                </p>
              )}
              {isExpanded ? (
                <div className="flex flex-wrap justify-center p-2 mb-1">
                  {experience.technologies &&
                    experience.technologies.map((tech, idx) => (
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
