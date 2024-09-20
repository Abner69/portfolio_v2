import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceCmd() {
  const { language } = useLanguage();
  const { getCollectionData } = useData();
  const [formalExperience, setFormalExperience] = useState([]);
  const [freelancerExperience, setFreelancerExperience] = useState([]);
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "N/A"; // Retorna "N/A" si el timestamp no es válido
    const date = new Date(timestamp.seconds * 1000); // Convierte a milisegundos
    return date.toLocaleDateString(); // Convierte a una cadena de fecha legible
  };
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

  if (!formalExperience.length && !freelancerExperience.length) {
    return (
      <div>{language === "en" ? "No Experience" : "No hay Experiencia"}</div>
    );
  }
  return (
    <div className="flex flex-col text-swmg-cmdtext-100 text-lg">
      <span className="text-swmg-cmdtext text-center">
        {language === "en" ? "Formal Experience" : "Experiencia Formal"}
      </span>
      <hr className="border-swmg-display" />
      {formalExperience.map((experience, index) => (
        <div key={index}>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Company: " : "Compañia: "}
            <span className="text-swmg-cmdtext-100">
              {experience.companyName}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Role: " : "Rol: "}
            <span className="text-swmg-cmdtext-100">{experience.role}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Project Name: " : "Nombre del Proyecto: "}
            <span className="text-swmg-cmdtext-100">
              {experience.projectName}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Year: " : "Año: "}
            <span className="text-swmg-cmdtext-100">
              {formatDate(experience.startDate)} -{" "}
              {formatDate(experience.endDate)}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Description: " : "Descripción: "}
            <span className="text-swmg-cmdtext-100">
              {experience.description}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Responsabilities: " : "Responsabiliades: "}
          </span>
          <ul className="list-disc">
            {experience.responsibilities &&
              experience.responsibilities.map((responsibility, index) => (
                <li className="text-swmg-cmdtext-100" key={index}>
                  {responsibility}
                </li>
              ))}
          </ul>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Technologies: " : "Tecnologias: "}
            {experience.technologies &&
              experience.technologies.map((tech, index) => (
                <span className="text-swmg-cmdtext-100 px-1" key={index}>
                  {tech}{" "}
                  {experience.technologies.length !== index + 1 ? "-" : ""}
                </span>
              ))}
          </span>
          <br />
          {experience.length !== index + 1 ? (
            <hr className="border-swmg-display" />
          ) : (
            ""
          )}
        </div>
      ))}
      <span className="text-swmg-cmdtext text-center">
        {language === "en" ? "Freelance Experience" : "Experiencia Freelance"}
      </span>
      <hr className="border-swmg-display" />
      {freelancerExperience.map((experience, index) => (
        <div key={index}>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Company: " : "Compañia: "}
            <span className="text-swmg-cmdtext-100">
              {experience.companyName}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Role: " : "Rol: "}
            <span className="text-swmg-cmdtext-100">{experience.role}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Project Name: " : "Nombre del Proyecto: "}
            <span className="text-swmg-cmdtext-100">
              {experience.projectName}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Year: " : "Año: "}
            <span className="text-swmg-cmdtext-100">
              {formatDate(experience.startDate)} -{" "}
              {formatDate(experience.endDate)}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Description: " : "Descripción: "}
            <span className="text-swmg-cmdtext-100">
              {experience.description}
            </span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Responsabilities: " : "Responsabiliades: "}
          </span>
          <ul className="list-disc ml-6">
            {experience.responsibilities &&
              experience.responsibilities.map((responsibility, index) => (
                <li className="text-swmg-cmdtext-100" key={index}>
                  {responsibility}
                </li>
              ))}
          </ul>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Technologies: " : "Tecnologias: "}
            {experience.technologies &&
              experience.technologies.map((tech, index) => (
                <span className="text-swmg-cmdtext-100 px-1" key={index}>
                  {tech}{" "}
                  {experience.technologies.length !== index + 1 ? "-" : ""}
                </span>
              ))}
          </span>
          <br />
          {experience.length !== index + 1 ? (
            <hr className="border-swmg-display" />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
