import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useData } from "../context/DataContext";

export default function WhoAmi() {
  const { language } = useLanguage();
  const { getCollectionData } = useData();
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    const profileDataFromContext = getCollectionData("profile");
    try {
      if (profileDataFromContext.length) {
        const filteredAbout = profileDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "About"
        );
        setAboutData(filteredAbout[0]);
      }
    } catch (error) {
      console.error("Error fetching About data:", error);
    }
  }, [language, getCollectionData]);
  if (aboutData.length === 0) {
    return <div>{language === "en" ? "No Data" : "No hay Datos"}</div>;
  }

  return (
    <div className="flex flex-col text-swmg-cmdtext-100 text-lg">
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Wizard Name: " : "Nombre del hechicero: "}
        <span className="text-swmg-cmdtext-100">{aboutData.name}👋👋</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Magic College: " : "Colegio de hechiceria: "}
        <span className="text-swmg-cmdtext-100">{aboutData.college}</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Magic Degree: " : "Titulo de hechiceria: "}
        <span className="text-swmg-cmdtext-100">{aboutData.degree}</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Year: " : "Año: "}
        <span className="text-swmg-cmdtext-100">{aboutData.yofStudy}</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Description: " : "Descripcion: "}
        <span className="text-swmg-cmdtext-100">{aboutData.description}</span>
      </span>
    </div>
  );
}
