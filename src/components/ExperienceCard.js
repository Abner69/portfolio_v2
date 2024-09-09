import React from "react";

export default function ExperienceCard({ experiences }) {
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "N/A"; // Retorna "N/A" si el timestamp no es válido
    const date = new Date(timestamp.seconds * 1000); // Convierte a milisegundos
    return date.toLocaleDateString(); // Convierte a una cadena de fecha legible
  };
  return (
    <div className="carousel rounded-box flex w-full md:justify-center p-8 overflow-x-auto">
      {experiences.map((experience, index) => (
        <div
          className="carousel-item m-4 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 focus-within:border-blue-500 hover:m-4"
          key={index}
        >
          <div className="card w-64 shadow-xl hover:border hover:border-blue-500">
            <figure className="w-full h-32 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={experience.imageUrl}
                alt={experience.companyName || "Company"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{experience.companyName}</h2>
              <h3 className="text-sm text-gray-600">
                {experience.role} - {experience.projectName}
              </h3>
              <h3 className="text-sm">
                {formatDate(experience.startDate)} -{" "}
                {formatDate(experience.endDate)}
              </h3>
              <p>{experience.description}</p>
              <ul className="list-disc ml-6 mt-2">
                {experience.responsibilities &&
                  experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
              </ul>
              <div className="mt-2">
                {experience.technologies &&
                  experience.technologies.map((tech, index) => (
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
