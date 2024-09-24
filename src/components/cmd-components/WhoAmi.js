import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";

export default function WhoAmi() {
  //Language Context
  const { language } = useLanguage();
  //Data Context
  const { getCollectionData } = useData();
  //Data for this container
  const [aboutData, setAboutData] = useState([]);
  const [softSkillData, setSoftSkillData] = useState([]);

  //Fetching data from db
  useEffect(() => {
    const profileDataFromContext = getCollectionData("profile");
    try {
      if (profileDataFromContext.length) {
        const filteredAbout = profileDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "About"
        );
        setAboutData(filteredAbout[0]);
        const filteredSoftSkills = profileDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "SoftSkills"
        );
        setSoftSkillData(
          filteredSoftSkills.length > 0 ? filteredSoftSkills[0].softSkills : []
        );
      }
    } catch (error) {
      console.error("Error fetching About data:", error);
    }
  }, [language, getCollectionData]);

  //Skeleton if not fetch data
  if (aboutData.length === 0) {
    return <div>{language === "en" ? "No Data" : "No hay Datos"}</div>;
  }

  return (
    //Who Am I Section
    <div className="flex flex-col text-lg text-swmg-cmdtext-100">
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Wizard Name: " : "Nombre del hechicero: "}
        <span className="text-swmg-cmdtext-100">{aboutData.name}👋👋</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Magic College: " : "Colegio de hechicería: "}
        <span className="text-swmg-cmdtext-100">{aboutData.college}</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Magic Degree: " : "Titulo de hechicería: "}
        <span className="text-swmg-cmdtext-100">{aboutData.degree}</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Year: " : "Año: "}
        <span className="text-swmg-cmdtext-100">{aboutData.yofStudy}</span>
      </span>

      <span className="text-swmg-cmdtext">
        {language === "en" ? "Description: " : "Descripción: "}
        <span className="text-swmg-cmdtext-100">{aboutData.description}</span>
      </span>
      <span className="text-swmg-cmdtext">
        {language === "en" ? "Human Skills: " : "Habilidades Humanas: "}
        {softSkillData.map((sSkill, index) => (
          <span className="ml-1 text-swmg-cmdtext-100" key={index}>
            {" " + sSkill + " "}
            {softSkillData.length !== index + 1 ? "-" : ""}
          </span>
        ))}
      </span>
    </div>
  );
}
