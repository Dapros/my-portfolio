

export default function About() {
  return (
    <>
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
    </>
  )
}
