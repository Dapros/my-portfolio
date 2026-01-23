import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typewriter from "../components/Typewriter";

export default function Landing() {

  // Lista de titulos para el efecto de typing
  const titles = [
    "Frontend Developer",
    "Systems Engineer",
    "React Specialist",
    "Creative Coder",
    "Mobile & Web Dev"
  ]

  return (
    <div className="w-full xl:w-2/3 mx-auto px-5">
      <section
        id="landing"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Imagen y nombre */}
        <div className="mt-40 md:mt-0 relative flex justify-center items-center w-full h-full max-w-7xl font-display uppercase leading-none">
          {/* Nebulosa simple */}
          <div className="nebula-bg" />
          {/* Capa del texto de fondo */}
          <h1 className="absolute z-0 font-extrabold text-primary tracking-widest text-[14vw] md:text-[12rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[59%]">
            Sergio
          </h1>
          {/* Imagen central */}
          <img
            className="relative z-10 h-[70vh] md:h-[85vh] w-auto object-contain drop-shadow-2xl no-drag anim"
            src="/assets/Sergio-Landing.avif"
            alt="Sergio Romero Digital Art"
          />
          {/* Capa del texto por encima */}
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[37%] w-full text-center font-black">
            {/* Texto por encima de la imagen */}
            <h1 className="text-outline font-extrabold tracking-widest text-[14vw] md:text-[12rem] -translate-y-[5%]">
              Sergio
            </h1>
            {/* Apellido */}
            <h2 className="text-primary text-[10vw] md:text-[8rem] -mt-4 md:-mt-10">
              Romero
            </h2>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="absolute top-0 md:top-8 left-0 z-30 max-w-sm md:max-w-md p-4 pointer-events-auto backdrop-blur-sm rounded-xl bg-surface/30 border border-accent/50 animate-shadow-orbit">
          <div className="space-y-2">

            <div className="bg-black/60 border border-white/10 rounded-lg p-3 shadow-inner">
              <div className="flex gap-1.5 mb-2 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>

              <div className="text-lg md:text-xl font-code overflow-hidden whitespace-no-wrap">
                <Typewriter 
                  textArray={titles}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseTime={200}
                />
              </div>
            </div>
            <p className="text-sm text-text-p font-body leading-relaxed">
              Systems Engineer & Frontend Developer. I merge creative design with technical logic to build efficient, high-quality web and mobile interfaces on time.
            </p>
          </div>

          {/* Botones y Redes */}
          <div className="flex items-center flex-wrap gap-3 py-4">
            <a
              href="https://github.com/Dapros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:shadow-accent/50 hover:shadow-md transition-colors duration-300 p-2 border border-accent/50 rounded-full hover:border-accent"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-david-romero-pulido-098931203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:shadow-accent/50 hover:shadow-md transition-colors duration-300 p-2 border border-accent/50 rounded-full hover:border-accent"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="/pdfs/Sergio_Romero_Frontend_Developer_EN.pdf"
              download
              className="flex items-center space-x-2 bg-accent text-background hover:shadow-accent/50 hover:shadow-md border border-accent/50 hover:border-accent transition-all duration-300 rounded-full py-2 px-5 font-bold"
            >
              <FaDownload size={20} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Dapros text */}
        <div className="absolute bottom-30 right-8 z-30">
          <p className="w-min break-all flex flex-col text-center text-primary hover:text-accent transition-colors text-2xl uppercase font-code font-bold leading-none">
            Dapros
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 mb-15 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <div className="w-7 h-12 rounded-full border-2 border-white/60 flex justify-center p-2 shadow-[0_0_15px_rgba(63,226,221,0.3)]">
            <div className="w-2 h-3 bg-white rounded-full animate-scroll" />
          </div>
          <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-body">
            Scroll
          </span>
          
        </div>
      </section>
    </div>
  );
}