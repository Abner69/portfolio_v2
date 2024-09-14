import React, { useEffect, useState, useRef } from "react";
import { useData } from "../context/DataContext";
import Skeleton from "./Skeleton";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language } = useLanguage();
  const { getCollectionData } = useData();
  const [skills, setSkills] = useState([]);
  const [visiblePercentages, setVisiblePercentages] = useState([]); // Estado para los porcentajes visibles
  const skillRefs = useRef([]); // Referencias a los elementos de habilidad

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

  useEffect(() => {
    // Reinicia el valor de las barras de progreso a 0 cuando cambie el idioma
    skillRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.setProperty("--value", 0); // Reinicia visualmente a 0
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

  if (skills.length === 0) {
    return <Skeleton language={language} section={"Skills"} />;
  }

  return (
    <div className="flex flex-col p-4 items-center">
      <h2 className="text-3xl font-bold m-4 text-cherry-title dark:text-dracula-title">
        {language === "en" ? "Tech Stack" : "Tecnologias"}
      </h2>
      <div className="rounded-box flex w-full md:justify-center rounded-xl p-4 overflow-x-auto bg-cherry-main dark:bg-dracula-main">
        {skills.map((skill, index) => (
          <div
            className="max-w-64 m-4 shadow-xl rounded-xl overflow-hidden hover:border hover:border-cherry-text-500 dark:hover:border-dracula-text-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 hover:m-4"
            key={index}
          >
            <img
              className="w-full h-full"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
            <div className="bg-cherry-subtext-500 bg-opacity-30 dark:bg-dracula-main dark:bg-opacity-75 h-full w-full flex items-center justify-center flex-wrap absolute bottom-0">
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
                    <span className="text-center text-xl font-bold text-cherry-subtext dark:text-dracula-subtext">
                      {visiblePercentages[index]}%
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-bold m-1 py-1 px-2 text-cherry-text bg-white bg-opacity-25 dark:text-dracula-text dark:bg-white dark:bg-opacity-10 rounded-2xl">
                  {skill.years}{" "}
                  {language === "en"
                    ? skill.years > 1
                      ? "years"
                      : "year"
                    : skill.years > 1
                    ? "años"
                    : "año"}
                </span>
                <span className="font-bold m-1 py-1 px-2 text-cherry-title bg-white bg-opacity-25 dark:text-dracula-title dark:bg-white dark:bg-opacity-10 rounded-2xl">
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
