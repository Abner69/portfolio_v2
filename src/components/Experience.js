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
      <h2 className="text-2xl font-bold mb-4">
        {language === "en" ? "Formal Experience" : "Experiencia Formal"}
      </h2>
      {formalExperience.map((experience, index) => (
        <div key={index} className="mb-6">
          {experience.imageUrl && (
            <img
              src={experience.imageUrl}
              alt={experience.companyName || "Company"}
              className="w-16 h-16 object-cover mb-2"
            />
          )}
          <h3 className="text-xl font-semibold">{experience.companyName}</h3>
          <p className="text-sm text-gray-600">
            {experience.role} - {experience.projectName}
          </p>
          <p className="text-sm">
            {formatDate(experience.startDate)} -{" "}
            {formatDate(experience.endDate)}
          </p>
          <p className="text-sm">{experience.description}</p>
          <ul className="list-disc ml-6 mt-2">
            {experience.responsibilities &&
              experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
          </ul>
          <div className="mt-2">
            {experience.technologies &&
              experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 inline-block px-2 py-1 bg-gray-200 rounded"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      ))}

      <h2 className="text-2xl font-bold mb-4">
        {language === "en" ? "Freelancer Experience" : "Experiencia Freelancer"}
      </h2>
      {freelancerExperience.map((experience, index) => (
        <div key={index} className="mb-6">
          {experience.imageUrl && (
            <img
              src={experience.imageUrl}
              alt={experience.companyName || "Company"}
              className="w-16 h-16 object-cover mb-2"
            />
          )}
          <h3 className="text-xl font-semibold">{experience.companyName}</h3>
          <p className="text-sm text-gray-600">
            {experience.role} - {experience.projectName}
          </p>
          <p className="text-sm">
            {formatDate(experience.startDate)} -{" "}
            {formatDate(experience.endDate)}
          </p>
          <p className="text-sm">{experience.description}</p>
          <ul className="list-disc ml-6 mt-2">
            {experience.responsibilities &&
              experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
          </ul>
          <div className="mt-2">
            {experience.technologies &&
              experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 inline-block px-2 py-1 bg-gray-200 rounded"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
