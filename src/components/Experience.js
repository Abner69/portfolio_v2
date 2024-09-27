import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import ExperienceCard from "./ExperienceCard";
import Skeleton from "./skeleton-components/Skeleton";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  //Language Context
  const { language } = useLanguage();
  //Data context
  const { getCollectionData } = useData();
  //Data for this component
  const [formalExperience, setFormalExperience] = useState([]);
  const [freelancerExperience, setFreelancerExperience] = useState([]);

  //Data fetching from db
  useEffect(() => {
    const projectsDataFromContext = getCollectionData("experience");
    try {
      if (projectsDataFromContext.length) {
        const formalFiltered = projectsDataFromContext
          .filter(
            (doc) =>
              doc.lang === language &&
              doc.component === "Experience" &&
              doc.workType === "formal"
          )
          .sort((a, b) => a.startDate - b.startDate);
        const freelanceFiltered = projectsDataFromContext
          .filter(
            (doc) =>
              doc.lang === language &&
              doc.component === "Experience" &&
              doc.workType === "freelance"
          )
          .sort((a, b) => a.startDate - b.startDate);
        setFormalExperience(formalFiltered);
        setFreelancerExperience(freelanceFiltered);
      }
    } catch (error) {
      console.error("Error fetching Experience data:", error);
    }
  }, [language, getCollectionData]);

  //Skeleton if not fetch data
  if (!formalExperience.length && !freelancerExperience.length) {
    return <Skeleton language={language} section={"Experience"} />;
  }

  return (
    //Cotainer Experience Section
    <div className="flex flex-col items-center p-4">
      {/*Title for Formal Experience */}
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Formal Experience" : "Experiencia Formal"}
      </h2>
      {/*Experiences Cards*/}
      <ExperienceCard experiences={formalExperience} />
      {/*Title for Freelance Experience */}
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en"
          ? "Freelancer Experience"
          : "Experiencia Independiente"}
      </h2>
      {/*Experiences Cards*/}
      <ExperienceCard experiences={freelancerExperience} />
    </div>
  );
};

export default Experience;
