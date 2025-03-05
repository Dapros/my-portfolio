import { FaHtml5, FaReact, FaPython, FaGitAlt, FaGithub   } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill, RiTailwindCssFill  } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";


export default function About() {
  return (
    <>
      <article className="my-10 lg:my-30">
        
        <section className="px-4 scroll-mt-24" id="about">
          <h3 className="uppercase font-bold text-sm lg:text-lg">Introduction</h3>
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-6xl text-secondary">Overview.</h1>
          <hr className="h-1 my-2 bg-primary border-none w-28 rounded-xl" />
          <p className="py-8 text-lg lg:text-xl lg:w-3/4">
            Proficient in web technologies such as HTML, CSS, JavaScript and TypeScript, I am a developer passionate about innovation and creating impactful digital experiences. My mastery of React allows me to implement user-centric solutions, adapting to market changes with agility. As a self-taught developer, I am always learning and perfecting my skills to deliver scalable and high quality projects. Are you up for transforming your ideas into reality with my collaboration?
          </p>

          <section>
            <h1 className="font-extrabold text-lg md:text-2xl text-tertiary">Tools & Skills</h1>
            
            <div className="py-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-5">
              <div className="flex flex-col items-center justify-center text-[#f06529]">
                <FaHtml5 size={40} />
                <p className="font-bold">HTML</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#2965f1]">
                <IoLogoCss3 size={40}/>
                <p className="font-bold">CSS</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#f0db4f]">
                <RiJavascriptFill size={40} />
                <p className="font-bold">Javascript</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#007acc]">
                <BiLogoTypescript size={40} />
                <p className="font-bold">Typescript</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#88dded]">
                <FaReact size={40} />
                <p className="font-bold">React</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#306998]">
                <FaPython size={40} />
                <p className="font-bold">Python</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#38bcfa]">
                <RiTailwindCssFill size={40} />
                <p className="font-bold">Tailwind</p>
              </div>

              <div className="flex flex-col items-center justify-center text-[#F1502F]">
                <FaGitAlt size={40} />
                <p className="font-bold">Git</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <FaGithub size={40} />
                <p className="font-bold">GitHub</p>
              </div>
            </div>
          </section>
        </section>
      </article>
    </>
  )
}
