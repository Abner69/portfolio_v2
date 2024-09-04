import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

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
          <p className="py-4">
            Email:{" "}
            <a
              href={`mailto:${aboutData.contact.email}`}
              className="text-blue-500"
            >
              {aboutData.contact.email}
            </a>
          </p>
          <p className="py-4">Phone: {aboutData.contact.phone}</p>
          <p className="py-4">
            GitHub:{" "}
            <a
              href={aboutData.contact.github}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
          <p className="py-4">
            LinkedIn:{" "}
            <a
              href={aboutData.contact.linkedin}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>

          <div className="collapse collapse-arrow bg-secondary">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">Interests</div>
            <div className="collapse-content">
              <ul className="list-disc ml-6">
                {Array.isArray(aboutData.interests) ? (
                  aboutData.interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))
                ) : (
                  <p>No interests available</p>
                )}
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-primary">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">Skills</div>
            <div className="collapse-content">
              <ul className="list-disc ml-6">
                {skills.map((skill, index) => (
                  <li key={index}>
                    {skill.name} - {skill.percentage}% ({skill.years}{" "}
                    {language === "en"
                      ? skill.years > 1
                        ? "years"
                        : "year"
                      : skill.years > 1
                      ? "años"
                      : "año"}
                    )
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
