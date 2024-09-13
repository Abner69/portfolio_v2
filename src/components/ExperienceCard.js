import React from "react";

export default function ExperienceCard({ experiences }) {
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "N/A"; // Retorna "N/A" si el timestamp no es válido
    const date = new Date(timestamp.seconds * 1000); // Convierte a milisegundos
    return date.toLocaleDateString(); // Convierte a una cadena de fecha legible
  };
  return (
    <div className="rounded-box flex w-full md:justify-center rounded-xl p-4 overflow-x-auto bg-cherry-main dark:bg-dracula-main">
      {experiences.map((experience, index) => (
        <div
          className="carousel-item m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-cherry-text-500 hover:m-4 dark:hover:border-dracula-text-500"
          key={index}
        >
          <div className="flex flex-col min-h-96 w-52 rounded-xl overflow-hidden bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 shadow-xl hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500">
            <figure className="w-full h-32 overflow-hidden">
              <img
                className="w-full h-full self-center"
                src={experience.imageUrl}
                alt={experience.companyName || "Company"}
              />
            </figure>
            <div className="flex flex-col items-center">
              <h2 className="text-center text-xl font-bold text-cherry-text dark:text-dracula-text">
                {experience.companyName}
              </h2>
              <p className="text-md text-cherry-subtext dark:text-dracula-subtext self-center text-center">
                {experience.role}
              </p>
              <p className="text-md text-cherry-subtext dark:text-dracula-subtext self-center text-center">
                {experience.projectName}
              </p>
              <h3 className="text-sm text-cherry-text-900 dark:text-white">
                {formatDate(experience.startDate)} -{" "}
                {formatDate(experience.endDate)}
              </h3>
              <p className="text-sm text-cherry-text-900 dark:text-white">
                {experience.description}
              </p>
              <ul className="list-disc ml-6 mt-2">
                {experience.responsibilities &&
                  experience.responsibilities.map((responsibility, index) => (
                    <li
                      className="text-sm text-cherry-title dark:text-dracula-title"
                      key={index}
                    >
                      {responsibility}
                    </li>
                  ))}
              </ul>
              <div className="flex p-2 flex-wrap mb-1">
                {experience.technologies &&
                  experience.technologies.map((tech, index) => (
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
