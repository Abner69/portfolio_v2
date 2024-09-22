import React from "react";
import AboutSkeleton from "./AboutSkeleton";
import ExperienceSkeleton from "./ExperienceSkeleton";
import SkillsSkeleton from "./SkillsSkeleton";

export default function Skeleton({ section }) {
  switch (section) {
    case "About":
      return <AboutSkeleton />;
    case "Experience":
      return (
        <div>
          <ExperienceSkeleton />
          <ExperienceSkeleton />
        </div>
      );
    case "Projects":
      return <ExperienceSkeleton />;
    case "Skills":
      return <SkillsSkeleton />;
    case "Certifications":
      return <SkillsSkeleton />;
    default:
      return <div></div>;
  }
}
