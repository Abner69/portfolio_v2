import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { useLanguage } from "../../context/LanguageContext";

export default function CertificationsCmd() {
  //Language Context
  const { language } = useLanguage();
  //Data Context
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
    return (
      <div>
        {language === "en"
          ? "Waiting for certifications"
          : "Esperando las certificaciones"}
      </div>
    );
  }
  return (
    //Container Certification for CMD
    <div className="flex flex-col text-lg text-swmg-cmdtext-100">
      <span className="text-center text-swmg-cmdtext">
        {language === "en" ? "Certifications " : "Certificado"}
      </span>
      <hr className="border-swmg-display" />
      {certifications.map((certification, index) => (
        <div key={index}>
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Certificate: " : "Certificado: "}
            <span className="text-swmg-cmdtext-100">{certification.name}</span>
          </span>
          <br />
          <span className="text-swmg-cmdtext">
            {language === "en" ? "Year: " : "Año: "}
            <span className="text-swmg-cmdtext-100">{certification.year}</span>
          </span>
          <br />
          <a href={certification.certifUrl} className="text-swmg-cmdtext">
            <span className="text-swmg-cmdtext-100 hover:text-swmg-text">
              {language === "en" ? "View" : "Ver"}
            </span>
          </a>
          <br />

          <hr className="border-swmg-display" />
        </div>
      ))}
    </div>
  );
}
