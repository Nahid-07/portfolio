import React from "react";
import { SkillBar } from "react-skillbars";

const SkillsBanner = () => {
  const skills = [
    { type: "JavaScrip", level: 70 },
    { type: "React", level: 75 },
    { type: "HTML", level: 90 },
    { type: "CSS", level: 90 },
    { type: "Tailwind", level: 80 },
    { type: "Bootstrap", level: 80 },
    { type: "MOngoDB", level: 50 },
    { type: "Express JS", level: 50 },
  ];
  return (
    <div id="skills" className="bg-slate-800 p-6 md:p-16">
        <h1 className="text-5xl text-center text-orange-500">Skills</h1>
      <div className="container mx-auto my-20">
        <SkillBar skills={skills} height={25} />
      </div>
    </div>
  );
};

export default SkillsBanner;
