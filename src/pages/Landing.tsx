import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typewriter from "../components/Typewriter";
import { info } from "../data/info";
import { useState } from "react";

export default function Landing() {
  const [ data ] = useState(info)
  const [showCVOptions, setShowCVOptions] = useState(false)

  // Lista de titulos para el efecto de typing
  const titles = [
    "Systems Engineer",
    "Full-Stack Developer",
    "Frontend & Mobile Specialist",
    "React & Next.js Expert",
    "Tech Architecture Enthusiast"
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
          
          {/* Capa del texto de FONDO */}
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full flex flex-col items-center justify-center font-black pointer-events-none">
            <h1 className="font-extrabold text-primary tracking-widest text-[14vw] md:text-[12rem]">
              Sergio
            </h1>
            <h2 className="opacity-0 text-[10vw] md:text-[8rem] -mt-4 md:-mt-10">
              Romero
            </h2>
          </div>

          {/* Imagen central */}
          <img
            className="relative z-10 h-[70vh] md:h-[85vh] w-auto object-contain drop-shadow-2xl no-drag anim pointer-events-none"
            src="/assets/Sergio-Landing.avif"
            alt="Sergio Romero Digital Art"
          />

          {/* Capa del texto FRONTAL */}
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full flex flex-col items-center justify-center font-black pointer-events-none">
            <h1 className="text-outline font-extrabold tracking-widest text-[14vw] md:text-[12rem]">
              Sergio
            </h1>
            <h2 className="text-primary text-[10vw] md:text-[8rem] -mt-4 md:-mt-10 pointer-events-auto">
              Romero
            </h2>
          </div>
        </div>

        {/* Información de contacto */}
        <div 
          onMouseLeave={() => setShowCVOptions(false)}
          className="absolute top-0 md:top-8 left-0 z-30 max-w-sm md:max-w-md p-4 pointer-events-auto backdrop-blur-sm rounded-xl bg-surface/30 border border-accent/50 animate-shadow-orbit"
        >
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
              {data[0].description}
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
              href="https://www.linkedin.com/in/sergio-rom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:shadow-accent/50 hover:shadow-md transition-colors duration-300 p-2 border border-accent/50 rounded-full hover:border-accent"
            >
              <FaLinkedinIn size={24} />
            </a>
            
            {/* Contenedor Animado para los botones del CV */}
            <div className="relative h-10.5 min-w-50 rounded-full">
              {/* Botón original: Download CV */}
              <button
                onClick={() => setShowCVOptions(true)}
                className={`absolute inset-0 rounded-full flex items-center justify-center space-x-2 bg-accent text-background hover:shadow-accent/50 hover:shadow-md border border-accent/50 hover:border-accent transition-all duration-300 font-bold w-full h-full ${
                  showCVOptions ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
                }`}
              >
                <FaDownload size={20} />
                <span>Download CV</span>
              </button>

              {/* Botones de Idiomas que aparecen */}
              <div
                className={`absolute inset-0 flex items-center justify-between gap-2 transition-all duration-300 w-full h-full ${
                  showCVOptions ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
                }`}
              >
                <a
                  href="/pdfs/CV-ES _Sergio_Romero_Ingeniero_Sistemas.pdf"
                  download="CV_Sergio_Romero_ES.pdf"
                  className="flex items-center justify-center space-x-1.5 bg-accent text-background hover:shadow-accent/50 hover:shadow-md border border-accent/50 hover:border-accent transition-all duration-300 rounded-full h-full flex-1 font-bold text-sm"
                >
                  <FaDownload size={14} />
                  <span>Español</span>
                </a>
                <a
                  href="/pdfs/CV-EN _Sergio_Romero_Systems_Engineer.pdf"
                  download="CV_Sergio_Romero_EN.pdf"
                  className="flex items-center justify-center space-x-1.5 bg-accent text-background hover:shadow-accent/50 hover:shadow-md border border-accent/50 hover:border-accent transition-all duration-300 rounded-full h-full flex-1 font-bold text-sm"
                >
                  <FaDownload size={14} />
                  <span>English</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Dapros text */}
        <div className="absolute bottom-30 right-8 z-30 pointer-events-none">
          <p className="w-min break-all flex flex-col text-center text-primary hover:text-accent transition-colors text-2xl uppercase font-code font-bold leading-none pointer-events-auto">
            Dapros
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 mb-15 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
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