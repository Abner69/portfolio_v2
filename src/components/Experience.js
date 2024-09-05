import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

const Experience = ({ language }) => {
  const { getCollectionData } = useData();
  const [formalExperience, setFormalExperience] = useState([]);
  const [freelancerExperience, setFreelancerExperience] = useState([]);
  useEffect(() => {
    const projectsDataFromContext = getCollectionData("experience");
    try {
      if (projectsDataFromContext.length) {
        const formalFiltered = projectsDataFromContext.filter(
          (doc) =>
            doc.lang === language &&
            doc.component === "Experience" &&
            doc.workType === "formal"
        );
        const freelanceFiltered = projectsDataFromContext.filter(
          (doc) =>
            doc.lang === language &&
            doc.component === "Experience" &&
            doc.workType === "freelance"
        );
        setFormalExperience(formalFiltered);
        setFreelancerExperience(freelanceFiltered);
      }
    } catch (error) {
      console.error("Error fetching Experience data:", error);
    }
  }, [language, getCollectionData]);

  // Función para convertir Firestore timestamp a una fecha legible
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "N/A"; // Retorna "N/A" si el timestamp no es válido
    const date = new Date(timestamp.seconds * 1000); // Convierte a milisegundos
    return date.toLocaleDateString(); // Convierte a una cadena de fecha legible
  };

  if (!formalExperience.length && !freelancerExperience.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="experience-section p-4">
      <h2 className="text-2xl font-bold mb-4 flex w-full justify-center">
        {language === "en" ? "Formal Experience" : "Experiencia Formal"}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <svg
              tabIndex={0}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div
            tabIndex={0}
            className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow"
          >
            <div className="card glass">
              <div tabIndex={0} className="card-body ">
                <div className="card-title text-sm">
                  {language === "en"
                    ? "Do you need to know how it works?"
                    : "¿Necesitas saber como funciona?"}
                </div>
                <div className="flex w-full justify-center gap-1 p-4">
                  {language === "en" ? "Press" : "Presiona"}
                  <kbd className="kbd kbd-xs">◀︎</kbd>
                  <kbd className="kbd kbd-xs">▶︎</kbd>
                  {language === "en" ? "to move" : "para mover"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </h2>

      <div className="carousel rounded-box flex w-full justify-center p-6">
        {formalExperience.map((experience, index) => (
          <div className="carousel-item m-1" key={index}>
            <div className="card bg-base-100 w-64 shadow-xl">
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

      <h2 className="text-2xl font-bold mb-4 flex w-full justify-center">
        {language === "en" ? "Freelancer Experience" : "Experiencia Freelancer"}
      </h2>
      <div className="carousel rounded-box flex w-full justify-center p-6">
        {freelancerExperience.map((experience, index) => (
          <div className="carousel-item m-1" key={index}>
            <div className="card bg-base-100 w-64 shadow-xl">
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
    </div>
  );
};

export default Experience;
