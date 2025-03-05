import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Landing() {
  return (
    <>
      <article className="lg:flex md:mt-5 lg:mt-10 relative">
        <section className='border border-primary-o md:w-2/3 lg:w-1/2 mx-auto p-5 rounded-2xl h-fit backdrop-blur-lg lg:absolute lg:top-15 z-1 scroll-mt-52' id="landing">
          <div className='space-y-4'>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Hello, I'm <span className='text-secondary'>Sergio</span></h1>
            <p className='text-sm md:text-md xl:text-lg md:font-semibold xl:font-bold'>I fuse creativity and technology to transform ideas into remarkable designs, develop intuitive interfaces and build dynamic and functional web applications.</p>
          </div>
          <div className='flex items-center space-x-2 py-4'>
            <a 
              href="https://github.com/Dapros" 
              target="_blank"
              className='border-2 border-primary rounded-full p-1'>
              <FaGithub size={30} strokeWidth={1} className="p-1" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sergio-david-romero-pulido-098931203/" 
              target="_blank"
              className='border-2 border-primary rounded-full p-1'>
              <FaLinkedinIn size={30} strokeWidth={1} className="p-1" />
            </a>
            <a 
              href="" 
              className='flex items-center space-x-2 border-2 border-primary rounded-full py-1 px-3'>
              <FaDownload size={30} strokeWidth={1} className="p-1"  />
              <p className='font-bold'>Download CV</p>
            </a>
          </div>
        </section>

        <div className='lg:w-2/3'>
          <div className='relative transform lg:translate-x-[50%]'>
            <img 
              className='md:w-2/3 mx-auto lg:w-full anim'
              src="/public/HeroMaterialRoom.svg" 
              alt=""
            />
            <p className='absolute top-[25%] left-[20%] md:top-[30%] lg:top-[35%] md:left-[40%] py-2 px-3 md:px-5 rounded-full bg-2 text-xs md:text-md shadow'>Hey! thanks for visit my portfolio web site</p>
          </div>
        </div>
      </article>
    </>
  )
}
