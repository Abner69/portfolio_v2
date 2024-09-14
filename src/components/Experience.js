import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import ExperienceCard from "./ExperienceCard";
import Skeleton from "./Skeleton";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();
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
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Formal Experience" : "Experiencia Formal"}
      </h2>
      <ExperienceCard experiences={formalExperience} />
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Freelancer Experience" : "Experiencia Freelancer"}
      </h2>
      <ExperienceCard experiences={freelancerExperience} />
    </div>
  );
};

export default Experience;
