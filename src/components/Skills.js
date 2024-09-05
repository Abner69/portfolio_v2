import React from "react";

export default function Skills({ skills, language }) {
  return (
    <div className="skills-section p-4 flex flex-row flex-wrap">
      {skills.map((skill, index) => (
        <div className="card glass m-2 p-2 flex flex-row flex-wrap" key={index}>
          <div className="card-title">{skill.name}</div>

          <div className="card-body">
            <div
              className="radial-progress"
              style={{ "--value": skill.percentage, "--size": "3rem" }}
              role="progressbar"
            >
              {skill.percentage}%
            </div>
            <span className="badge bg-slate-200">
              {skill.years}{" "}
              {language === "en"
                ? skill.years > 1
                  ? "years"
                  : "year"
                : skill.years > 1
                ? "años"
                : "año"}
            </span>
            <span className="badge bg-slate-200">
              {skill.nProjects}{" "}
              {language === "en"
                ? skill.nProjects > 1
                  ? "projects"
                  : "project"
                : skill.nProjects > 1
                ? "proyectos"
                : "proyecto"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
