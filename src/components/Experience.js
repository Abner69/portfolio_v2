import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import ExperienceCard from "./ExperienceCard";
import Skeleton from "./Skeleton";

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

  if (!formalExperience.length && !freelancerExperience.length) {
    return <Skeleton language={language} section={"Experience"} />;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-2 flex w-full justify-center">
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
      <ExperienceCard experiences={formalExperience} />
      <h2 className="text-2xl font-bold mb-2 flex w-full justify-center">
        {language === "en" ? "Freelancer Experience" : "Experiencia Freelancer"}
      </h2>
      <ExperienceCard experiences={freelancerExperience} />
    </div>
  );
};

export default Experience;
