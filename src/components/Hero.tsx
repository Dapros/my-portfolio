import { Github, Linkedin, Download } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section>
        <div className="flex flex-col space-y-5 lg:flex-row">
          <div className="flex flex-col text-white">
            <div className="flex flex-col items-center p-5 mt-5 space-y-5 border-2 rounded-md lg:items-start">
              <h1 className="text-2xl font-bold md:text-4xl">Hello, I'm <span className="text-blue-300">Sergio</span></h1>
              <p className="text-center lg:text-start">
                I design attractive interfaces that combine aesthetics and functionality for web applications, focusing on user preference.
              </p>

              <ul className="flex items-center space-x-2">
                <li className="flex items-center justify-center border-2 rounded-md w-9 h-9">
                  <a href="#">
                    <Github />
                  </a>
                </li>
                <li className="flex items-center justify-center border-2 rounded-md w-9 h-9">
                  <a href="#">
                    <Linkedin />
                  </a>
                </li>
                  <li className="flex items-center justify-center w-auto border-2 rounded-md h-9">
                    <a href="#" className="flex px-1">
                      <Download />
                      <span className="px-2">Download CV</span>
                    </a>
                  </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <p className="text-white absolute w-[55%] left-[25%] top-[30%] flex justify-center items-center text-[8px] md:text-xs lg:text-sm bg-[#313134] py-2 rounded-md bg-opacity-10 backdrop-blur-md">
              Hello, thanks for visit my portfolio web site
            </p>
            <img src="../../public/HeroMaterialRoom.png" className="w-[90%] mx-auto"/>
          </div>
        </div>
      </section>
    </>
  )
}
