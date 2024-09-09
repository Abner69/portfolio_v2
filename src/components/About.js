import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Contact from "./Contact";
import Skeleton from "./Skeleton";
const About = ({ language }) => {
  const { getCollectionData } = useData();
  const [aboutData, setAboutData] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [rolesData, setRolesData] = useState([]);
  const [softSkillData, setSoftSkillData] = useState([]);
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

  useEffect(() => {
    let currentIndex = 0;
    let currentString = "";
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout; // Variable para almacenar el timeout actual

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

    // Limpieza al desmontar o cuando rolesData cambie
    return () => clearTimeout(typingTimeout);
  }, [rolesData]);

  if (aboutData.length === 0) {
    return <Skeleton section={"About"} />;
  }

  return (
    <div className="hero bg-secondary bg-opacity-75 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-sm mx-auto flex flex-col items-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="rounded-lg shadow-2xl w-52 "
            alt=""
          />
          <div className="flex flex-wrap mt-4 justify-center">
            {softSkillData.map((sSkill, index) => (
              <div className="badge m-1 badge-ghost bg-opacity-25" key={index}>
                {sSkill}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold m-4">{aboutData.name}</h1>
          <h2 className="text-3xl font-bold m-4">&gt;{currentText}</h2>

          <p className="py-6">{aboutData.description}</p>
          <div className="text-xl font-medium">
            {language === "en" ? "Get in touch" : "Contactame"}
          </div>
          <Contact language={language} contact={aboutData.contact} />
          <div className="text-xl font-medium">
            {language === "en" ? "Interests" : "Intereses"}
          </div>
          <div className="w-full flex flex-wrap justify-center items-center p-2">
            {Array.isArray(aboutData.interests) ? (
              aboutData.interests.map((interest, index) => (
                <div
                  className="badge m-1 bg-gray-500 bg-opacity-25 badge-ghost"
                  key={index}
                >
                  {interest}
                </div>
              ))
            ) : (
              <p>No interests available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
