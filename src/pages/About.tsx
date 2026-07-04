import { 
  FaHtml5, FaReact, FaPython, FaGitAlt, FaGithub, FaNodeJs, 
  FaAws, FaUbuntu, FaDocker, FaJava, FaPhp 
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { 
  SiNextdotjs, SiExpo, SiAstro, SiExpress, SiThreedotjs 
} from "react-icons/si";

import { info } from "../data/info";
import { useState } from "react";

export default function About() {
  const [ data ] = useState(info);

  // Array de las habilidades
  const skillsData = [
    // Frontend & Lenguajes
    { name: "React", icon: FaReact, color: "group-hover:text-[#61DAFB]" },
    { name: "React Native", icon: FaReact, color: "group-hover:text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-black dark:group-hover:text-white" },
    { name: "TypeScript", icon: BiLogoTypescript, color: "group-hover:text-[#3178C6]" },
    { name: "JavaScript", icon: RiJavascriptFill, color: "group-hover:text-[#F7DF1E]" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "group-hover:text-[#38B2AC]" },
    { name: "Three.js", icon: SiThreedotjs, color: "group-hover:text-black dark:group-hover:text-white" },
    { name: "Expo", icon: SiExpo, color: "group-hover:text-black dark:group-hover:text-white" },
    { name: "Astro", icon: SiAstro, color: "group-hover:text-[#FF5D01]" },
    { name: "HTML5", icon: FaHtml5, color: "group-hover:text-[#E34F26]" },
    { name: "CSS3", icon: IoLogoCss3, color: "group-hover:text-[#1572B6]" },
    // Backend & Lenguajes
    { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "group-hover:text-gray-500" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "group-hover:text-[#4169E1]" },
    { name: "Python", icon: FaPython, color: "group-hover:text-[#3776AB]" },
    { name: "Java", icon: FaJava, color: "group-hover:text-[#007396]" },
    { name: "PHP", icon: FaPhp, color: "group-hover:text-[#777BB4]" },
    // Infraestructura & Herramientas
    { name: "AWS", icon: FaAws, color: "group-hover:text-[#FF9900]" },
    { name: "Ubuntu", icon: FaUbuntu, color: "group-hover:text-[#E95420]" },
    { name: "Docker", icon: FaDocker, color: "group-hover:text-[#2496ED]" },
    { name: "Git", icon: FaGitAlt, color: "group-hover:text-[#F05032]" },
    { name: "GitHub", icon: FaGithub, color: "group-hover:text-black dark:group-hover:text-white" },
  ];

  return (
    <article className="my-10 lg:my-30">
      <section className="px-4 scroll-mt-24" id="about">
        <h3 className="uppercase font-bold font-body text-sm lg:text-lg text-accent tracking-wider">
          {data[1].pretitle}
        </h3>
        <h1 className="font-extrabold font-display text-3xl md:text-4xl lg:text-6xl text-primary pb-2">
          {data[1].title}
        </h1>
        <hr className="h-1.5 my-2 bg-accent border-none w-24 rounded-full" />
        <p className="py-8 font-body text-lg lg:text-xl lg:w-3/4 text-gray-600 dark:text-gray-300 leading-relaxed">
          {data[1].description}
        </p>

        <section>
          <h1 className="font-extrabold text-xl md:text-3xl font-body mb-8 text-primary">
            {data[2].title}
          </h1>
            
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index} 
                  className="group flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`text-gray-400/80 transition-colors duration-300 ${skill.color}`}>
                    <Icon size={45} className="drop-shadow-sm group-hover:drop-shadow-md" />
                  </div>
                  <p className={`font-bold text-xs md:text-sm text-gray-500 transition-colors duration-300 text-center ${skill.color}`}>
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </article>
  );
}