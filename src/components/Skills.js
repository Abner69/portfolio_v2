import React, { useEffect, useState, useRef } from "react";
import { useData } from "../context/DataContext";
import Skeleton from "./Skeleton";

export default function Skills({ language }) {
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
    <div className="skills-section flex flex-col p-4">
      <h2 className="text-2xl font-bold flex w-full justify-center">
        {language === "en" ? "Skills" : "Habilidades"}
      </h2>
      <div className="carousel rounded-box flex w-full md:justify-center p-2 overflow-x-auto">
        {skills.map((skill, index) => (
          <div
            className="carousel-item card image-full w-64 m-4 shadow-xl hover:border hover:border-blue-500 transition-transform duration-300 transform hover:scale-110 focus-within:scale-110 hover:m-4"
            key={index}
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>

            <div className="card-body flex flex-row flex-wrap">
              <div className="card-title flex">{skill.name}</div>
              <div
                ref={(el) => (skillRefs.current[index] = el)} // Asignar la referencia
                className="radial-progress"
                style={{ "--value": 0, "--size": "3rem" }} // Empieza desde 0
                role="progressbar"
              >
                {visiblePercentages[index]}% {/* Mostrar el número visible */}
              </div>
              <div>
                <span className="badge m-2">
                  {skill.years}{" "}
                  {language === "en"
                    ? skill.years > 1
                      ? "years"
                      : "year"
                    : skill.years > 1
                    ? "años"
                    : "año"}
                </span>
                <span className="badge m-2">
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
