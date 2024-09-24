import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Contact from "./Contact";
import Skeleton from "./skeleton-components/Skeleton";
import { useLanguage } from "../context/LanguageContext";
const About = () => {
  //Language Context
  const { language } = useLanguage();
  //Data context
  const { getCollectionData } = useData();
  //Data for this component
  const [aboutData, setAboutData] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [rolesData, setRolesData] = useState([]);
  const [softSkillData, setSoftSkillData] = useState([]);

  //Data fetching from db
  useEffect(() => {
    const profileDataFromContext = getCollectionData("profile");
    try {
      if (profileDataFromContext.length) {
        const filteredAbout = profileDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "About"
        );
        setAboutData(filteredAbout[0]);
        const filteredRoles = profileDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "Role"
        );
        setRolesData(filteredRoles.length > 0 ? filteredRoles[0].roles : []);
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

  //Typer for roles
  useEffect(() => {
    let currentIndex = 0;
    let currentString = "";
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    const type = () => {
      if (!rolesData.length) return;

      const text = rolesData[currentIndex] + " ";
      if (isDeleting) {
        currentString = text.substring(0, charIndex--);
      } else {
        currentString = text.substring(0, charIndex++);
      }

      setCurrentText(currentString);

      if (!isDeleting && charIndex === text.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % rolesData.length;
        typingTimeout = setTimeout(type, 500);
      } else {
        typingTimeout = setTimeout(type, isDeleting ? 50 : 100);
      }
    };

    type();

    //Cleaning
    return () => clearTimeout(typingTimeout);
  }, [rolesData]);

  //Skeleton if not fetch data
  if (aboutData.length === 0) {
    return <Skeleton section={"About"} />;
  }

  return (
    //Container About Section
    <div className="m-4 p-8 rounded-lg bg-cherry-main dark:bg-dracula-main">
      {/* Container aling, desktop row, mobile col*/}
      <div className="flex flex-col md:flex-row ">
        {/*Image and Soft Skills container*/}
        <div className="lg:w-2/5 mx-auto flex flex-col items-center lg:justify-center">
          <img
            src={aboutData.imageUrl}
            className="rounded-lg shadow-2xl w-52 "
            alt=""
          />
          {/*Soft Skills badges */}
          <div className="flex flex-wrap mt-4 justify-center">
            {softSkillData.map((sSkill, index) => (
              <div
                className="m-1 py-1 px-2 rounded-2xl text-cherry-text bg-black bg-opacity-5 dark:text-dracula-text dark:bg-white dark:bg-opacity-5"
                key={index}
              >
                {sSkill}
              </div>
            ))}
          </div>
        </div>
        {/*Information Section*/}
        <div className="flex flex-col items-center lg:w-3/5">
          {/*Developer information */}
          <h1 className="text-5xl font-bold mx-4 mt-4 text-center text-cherry-text dark:text-dracula-text">
            {aboutData.name}
          </h1>
          <p className="text-center text-sm py-6 text-gray-700 dark:text-gray-400">
            {aboutData.college} - {aboutData.degree} - {aboutData.yofStudy}
          </p>
          <h2 className="text-center text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
            &gt;{currentText}
          </h2>
          <p className="text-justify text-xl py-6 m-2 text-cherry-subtext dark:text-dracula-subtext">
            {aboutData.description}
          </p>
          {/*Contact information */}
          <div className="text-2xl font-bold py-2 text-cherry-subtext dark:text-dracula-subtext">
            {language === "en" ? "Get in touch" : "Contáctame"}
          </div>
          <Contact language={language} contact={aboutData.contact} />
          {/*Interests information */}
          <div className="text-2xl font-bold py-2 text-cherry-subtext dark:text-dracula-subtext">
            {language === "en" ? "Interests" : "Intereses"}
          </div>
          <div className="flex flex-wrap w-full justify-center items-center p-2">
            {Array.isArray(aboutData.interests) ? (
              aboutData.interests.map((interest, index) => (
                <div
                  className="m-1 py-1 px-2 rounded-2xl text-cherry-text bg-black bg-opacity-5  dark:bg-opacity-5 dark:text-dracula-text dark:bg-white"
                  key={index}
                >
                  {interest}
                </div>
              ))
            ) : language === "en" ? (
              <p>No interests available.</p>
            ) : (
              <p>Intereses no disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
