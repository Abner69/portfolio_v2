import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Skeleton from "./skeleton-components/Skeleton";
import { useLanguage } from "../context/LanguageContext";

export default function Certifications() {
  //Language Context
  const { language } = useLanguage();
  //Data context
  const { getCollectionData } = useData();
  //Data for this component
  const [certifications, setCertifications] = useState([]);

  //Data fetching from db
  useEffect(() => {
    const skillsDataFromContext = getCollectionData("profile");
    try {
      if (skillsDataFromContext.length) {
        const filteredCertifications = skillsDataFromContext.filter(
          (doc) => doc.component === "Certifications"
        );
        setCertifications(
          filteredCertifications.length > 0
            ? filteredCertifications[0].certifications
            : []
        );
      }
    } catch (error) {
      console.error("Error fetching Certifications data:", error);
    }
  }, [language, getCollectionData]);

  //Skeleton if not fetch data
  if (certifications.length === 0) {
    return <Skeleton language={language} section={"Certifications"} />;
  }

  return (
    //Container Certifications Section
    <div className="flex flex-col items-center p-4">
      {/*Title of section*/}
      <h2 className="font-bold text-3xl m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Certifications" : "Certificados"}
      </h2>
      {/*Carousel of certifcations*/}
      <div className="flex w-full justify-between items-center overflow-x-auto hide-scrollbar rounded-xl p-4 bg-cherry-main dark:bg-dracula-main">
        {certifications.map((certification, index) => (
          //Cards of carousel
          <div
            className="min-w-48 max-w-48 h-28 m-4 shadow-xl rounded-xl overflow-hidden hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 hover:m-4"
            key={index}
          >
            <img
              className="w-full h-full blur-sm"
              src={certification.imageUrl}
              alt="Shoes"
            />
            <div className="flex flex-col h-full w-full items-center justify-between absolute bottom-0 bg-cherry-subtext-500 bg-opacity-30 dark:bg-dracula-main dark:bg-opacity-75">
              <div className="font-bold text-sm text-center m-2 text-cherry-text dark:text-dracula-text">
                {certification.name}
              </div>
              <div className="mb-2">
                <span className="font-bold m-1 py-1 px-2 rounded-2xl text-cherry-text bg-white bg-opacity-25 dark:text-dracula-text dark:bg-white dark:bg-opacity-10">
                  {certification.year}
                </span>
                <a
                  href={certification.certifUrl}
                  className="font-bold m-1 py-1 px-2 rounded-2xl text-cherry-title bg-white bg-opacity-25 dark:text-dracula-title dark:bg-white dark:bg-opacity-10"
                >
                  {language === "en" ? "View" : "Ver"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
