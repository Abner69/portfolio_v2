import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Skeleton from "./Skeleton";
import { useLanguage } from "../context/LanguageContext";

export default function Certifications() {
  const { language } = useLanguage();
  const { getCollectionData } = useData();
  const [certifications, setCertifications] = useState([]);
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

  if (certifications.length === 0) {
    return <Skeleton language={language} section={"Skills"} />;
  }

  return (
    <div className="flex flex-col p-4 items-center">
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Certifications" : "Certificados"}
      </h2>
      <div className="rounded-box flex w-full md:justify-center rounded-xl p-4 overflow-x-auto bg-cherry-main dark:bg-dracula-main">
        {certifications.map((certification, index) => (
          <div
            className="max-w-64 m-4 shadow-xl rounded-xl overflow-hidden hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 hover:m-4"
            key={index}
          >
            <img
              className="w-full h-full"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
            <div className="bg-cherry-subtext-500 bg-opacity-30 dark:bg-dracula-main dark:bg-opacity-75 h-full w-full flex flex-col items-center justify-center absolute bottom-0">
              <div className="text-xl font-bold m-2 text-cherry-text dark:text-dracula-text">
                {certification.name}
              </div>
              <div>
                <span className="font-bold m-1 py-1 px-2 text-cherry-text bg-white bg-opacity-25 dark:text-dracula-text dark:bg-white dark:bg-opacity-10 rounded-2xl">
                  {certification.year}
                </span>
                <a
                  href={certification.certifUrl}
                  className="font-bold m-1 py-1 px-2 text-cherry-title bg-white bg-opacity-25 dark:text-dracula-title dark:bg-white dark:bg-opacity-10 rounded-2xl"
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
