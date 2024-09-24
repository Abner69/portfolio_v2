import React, { useEffect, useState, useRef } from "react";
import { useData } from "../context/DataContext";
import Skeleton from "./skeleton-components/Skeleton";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  //Language Context
  const { language } = useLanguage();
  //Data context
  const { getCollectionData } = useData();
  const [skills, setSkills] = useState([]);
  //State for percentages of skills
  const [visiblePercentages, setVisiblePercentages] = useState([]);
  //Reference of skills cards
  const skillRefs = useRef([]);

  //Data fetching from db
  useEffect(() => {
    const skillsDataFromContext = getCollectionData("profile");
    try {
      if (skillsDataFromContext.length) {
        const filteredSkills = skillsDataFromContext.filter(
          (doc) => doc.component === "Skills"
        );
        setSkills(filteredSkills.length > 0 ? filteredSkills[0].skills : []);
        setVisiblePercentages(
          filteredSkills.length > 0
            ? new Array(filteredSkills[0].skills.length).fill(0)
            : [] // Inicializar los porcentajes visibles en 0
        );
      }
    } catch (error) {
      console.error("Error fetching Skills data:", error);
    }
  }, [language, getCollectionData]);

  //Animation of increasing percentages
  useEffect(() => {
    skillRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.setProperty("--value", 0);
      }
    });

    const observers = [];

    skillRefs.current = skillRefs.current.slice(0, skills.length);

    skillRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let currentValue = 0;
            const targetValue = skills[index].percentage;
            const increment = Math.ceil(targetValue / 100);

            const intervalId = setInterval(() => {
              currentValue += increment;
              if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(intervalId);
              }

              ref.style.setProperty("--value", currentValue);
              setVisiblePercentages((prev) => {
                const newPercentages = [...prev];
                newPercentages[index] = currentValue;
                return newPercentages;
              });
            }, 10);

            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [skills, language]); // Añadir `language` como dependencia

  //Skeleton if not fetch data
  if (skills.length === 0) {
    return <Skeleton language={language} section={"Skills"} />;
  }

  return (
    //Container Certifications Section
    <div className="flex flex-col items-center p-4">
      {/*Title of section*/}
      <h2 className="font-bold text-3xl m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Tech Stack" : "Tecnologías"}
      </h2>
      {/*Carousel of Skills*/}
      <div className="flex w-full justify-between items-center overflow-x-auto hide-scrollbar rounded-xl p-4 bg-cherry-main dark:bg-dracula-main">
        {skills.map((skill, index) => (
          //Cards of carousel
          <div
            className="min-w-48 max-w-48 shadow-xl rounded-xl overflow-hidden m-4 hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 hover:m-4"
            key={index}
          >
            <img
              className="w-full h-28 blur-sm"
              src={skill.imageUrl}
              alt="Shoes"
            />
            <div className="flex h-full w-full items-center justify-center flex-wrap absolute bottom-0 bg-cherry-main bg-opacity-50 dark:bg-dracula-main dark:bg-opacity-75">
              <div className="text-xl font-bold m-2 text-cherry-text dark:text-dracula-text">
                {skill.name}
              </div>
              <div>
                <div
                  className="relative size-16"
                  ref={(el) => (skillRefs.current[index] = el)}
                >
                  <svg
                    className="size-full -rotate-90"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-cherry-text dark:text-dracula-text"
                      stroke-width="4"
                    ></circle>

                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-cherry-title dark:text-dracula-title"
                      stroke-width="4"
                      stroke-dasharray="100"
                      stroke-dashoffset={visiblePercentages[index]}
                      stroke-linecap="round"
                    ></circle>
                  </svg>

                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="font-bold text-center text-xl text-cherry-subtext dark:text-dracula-subtext">
                      {visiblePercentages[index]}%
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-bold m-1 py-1 px-2 rounded-2xl text-cherry-text bg-white bg-opacity-25 dark:text-dracula-text dark:bg-white dark:bg-opacity-10">
                  {skill.years}{" "}
                  {language === "en"
                    ? skill.years > 1
                      ? "years"
                      : "year"
                    : skill.years > 1
                    ? "años"
                    : "año"}
                </span>
                <span className="font-bold m-1 py-1 px-2 rounded-2xl text-cherry-title bg-white bg-opacity-25 dark:text-dracula-title dark:bg-white dark:bg-opacity-10">
                  {skill.nProjects}{" "}
                  {language === "en"
                    ? skill.nProjects > 1
                      ? "projects"
                      : "project"
                    : skill.nProjects > 1
                    ? "proyectos"
                    : "proyecto"}
                </span>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
