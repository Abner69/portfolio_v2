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
          <h1 className="lg:hidden text-5xl font-bold mx-4 mt-4 text-center text-cherry-text dark:text-dracula-text">
            {aboutData.name}
          </h1>
          <p className="lg:hidden text-center text-sm py-6 text-gray-700 dark:text-gray-400">
            {aboutData.college} - {aboutData.degree} &#40;{aboutData.yofStudy}
            &#41;
          </p>
          <h2 className="lg:hidden text-center text-3xl font-bold mx-4 mb-4 text-cherry-title dark:text-dracula-title">
            &gt;{currentText}
          </h2>
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
          <a
            href={aboutData.contact.resume}
            className="flex w-40 shadow-sm rounded-md px-4 py-2 m-4 focus:outline-none text-cherry-title bg-cherry-text focus:ring-4 focus:ring-cherry-text-400 dark:bg-white dark:bg-opacity-15 dark:hover:bg-opacity-5 dark:text-dracula-title dark:focus:ring-dracula-text-900"
          >
            {language === "en" ? "My Resume" : "Mi Currículum"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="ml-4 size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
        {/*Information Section*/}
        <div className="flex flex-col items-center lg:w-3/5">
          {/*Developer information */}
          <h1 className="hidden lg:block text-5xl font-bold mx-4 mt-4 text-center text-cherry-text dark:text-dracula-text">
            {aboutData.name}
          </h1>
          <p className="hidden lg:block text-center text-sm py-6 text-gray-700 dark:text-gray-400">
            {aboutData.college} - {aboutData.degree} &#40;{aboutData.yofStudy}
            &#41;
          </p>
          <h2 className="hidden lg:block text-center text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
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
