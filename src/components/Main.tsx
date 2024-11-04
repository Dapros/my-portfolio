import { Github, Linkedin, Download } from "lucide-react";
import ProyectCards from "./ProyectCards";

export default function Main() {
  return (
    <>
      <main className="w-3/4 mx-auto">
        <article className="py-5 space-y-24">

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


          <section id="about">
            <div className="mb-10 text-white">
              <h1 className="flex justify-center py-5 text-2xl font-bold lg:justify-start md:text-4xl">About me</h1>
              <p className="text-center lg:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="text-white">
              <h1 className="flex justify-center py-10 text-2xl font-bold md:text-4xl">Tools & Skills</h1>
              <div className="lg:w-1/2 lg:mx-auto">
                <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5">

                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/html-1.svg" className="w-9 lg:w-11"/>
                    <p>HTML</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/css-3.svg" className="w-9 lg:w-11"/>
                    <p>CSS</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/logo-javascript.svg" className="w-9 lg:w-11"/>
                    <p>Javascript</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/typescript.svg" className="w-9 lg:w-11"/>
                    <p>Typescript</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/react-2.svg" className="w-9 lg:w-11"/>
                    <p>React</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/python-5.svg" className="w-9 lg:w-11"/>
                    <p>Python</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/tailwind-css-2.svg" className="w-9 lg:w-11"/>
                    <p>Tailwind</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/figma-icon.svg" className="w-9 lg:w-11"/>
                    <p>Figma</p>
                  </li>
                  <li className="flex flex-col items-center justify-center space-y-2">
                    <img src="../../public/git-icon.svg" className="w-9 lg:w-11"/>
                    <p>Git</p>
                  </li>
                </ul>
              </div>
             
            </div>
          </section>


          <section id="work">
            <h1 className="flex justify-center py-5 text-2xl font-bold text-white lg:justify-start md:text-4xl">My Proyects</h1>
            <div className="grid w-full grid-cols-1 gap-y-20 2xl:grid-cols-3 xl:grid-cols-2">
              <ProyectCards />
            </div>
          </section>


          <section id="contact">
            <div className="flex flex-col items-center justify-around lg:flex-row">
              <form action="" className="flex flex-col gap-8 text-white w-full lg:w-2/5 bg-[#313134] p-8 rounded-md">
                <div>
                  <h2 className="flex justify-start pb-5 text-2xl font-bold md:text-4xl">Contact me</h2>
                  <hr className="h-1 mb-5 bg-white border-none w-28 rounded-xl" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="yname" className="pb-2 text-xl">Your name</label>
                  <input 
                    type="text" 
                    id="yname"
                    name="name" 
                    placeholder="How can I tell you?"
                    className="p-2 bg-transparent border border-white rounded-md outline-none"
                    />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="yemail" className="pb-2 text-xl">Your email</label>
                  <input 
                    type="email" 
                    id="yemail"
                    name="email" 
                    placeholder="What’s your email?"
                    className="p-2 bg-transparent border border-white rounded-md outline-none"
                    />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="ymessage" className="pb-2 text-xl">Message</label>
                  <textarea 
                    name="message"
                    id="ymessage"
                    placeholder="Write your message here..."
                    className="p-2 bg-transparent border border-white rounded-md outline-none min-h-32"
                    ></textarea>
                </div>
                
                <button type="submit"
                    className="py-2 font-bold border border-white rounded-md"  
                  >Send Message
                </button>
              </form>

              <div>
                <img src="../../public/Character3dElement.png"
                  className="hidden w-3/4 mx-auto lg:block"
                />
              </div>

            </div>
          </section>


        </article>
      </main>
    </>
  )
}
