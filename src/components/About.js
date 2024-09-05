import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Skills from "./Skills";

const About = ({ language }) => {
  const { getCollectionData } = useData();
  const [aboutData, setAboutData] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const profileDataFromContext = getCollectionData("profile");
    try {
      if (profileDataFromContext.length) {
        const filteredAbout = profileDataFromContext.filter(
          (doc) => doc.lang === language && doc.component === "About"
        );
        const filteredSkills = profileDataFromContext.filter(
          (doc) => doc.component === "Skills"
        );
        setAboutData(filteredAbout[0]);
        setSkills(filteredSkills.length > 0 ? filteredSkills[0].skills : []);
      }
    } catch (error) {
      console.error("Error fetching About data:", error);
    }
  }, [language, getCollectionData]);

  // Validar que aboutData no esté vacío
  if (aboutData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />

        <div>
          <h1 className="text-5xl font-bold">{aboutData.name}</h1>
          <p className="py-6">{aboutData.description}</p>
          <div className="text-xl font-medium">
            {language === "en" ? "Contact" : "Contacto"}
          </div>
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                href={`mailto:${aboutData.contact.email}`}
                className="text-blue-500"
              >
                {aboutData.contact.email}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href={aboutData.contact.github}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </li>
            <li>Phone: {aboutData.contact.phone}</li>
            <li>
              LinkedIn:{" "}
              <a
                href={aboutData.contact.linkedin}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>

          <div className="mt-2">
            <h2 className="text-xl font-medium">
              {language === "en" ? "Interests" : "Intereses"}
            </h2>
            {Array.isArray(aboutData.interests) ? (
              aboutData.interests.map((interest, index) => (
                <div className="badge badge-accent m-1" key={index}>
                  {interest}
                </div>
              ))
            ) : (
              <p>No interests available</p>
            )}
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-medium">
              {language === "en" ? "Skills" : "Habilidades"}
            </h2>
            <Skills skills={skills} language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
