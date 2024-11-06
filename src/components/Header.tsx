import { Menu } from "lucide-react";


export default function Header() {

  return (
    <header className="bg-[#202023] w-full">
      <nav className="flex items-center justify-between w-3/4 py-5 mx-auto">
        <div className="flex items-center">
          <img src="../../public/White.png" className="w-9"/>
          <p className="text-white font-bold lg:text-[25px] md:text-[16px]">Sergio Romero | Dapros</p>
        </div>
        <div>
          <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col justify-between md:items-center md:gap-[4vw] gap-8">
              <li>
                <a 
                href="#about"
                className="text-white font-semibold lg:text-[20px] md:text-[16px]">About</a>
              </li>
              <li>
                <a 
                href="#work"
                className="text-white font-semibold lg:text-[20px] md:text-[16px]">Work</a>
              </li>
              <li>
                <a 
                href="#contact"
                className="text-white font-semibold lg:text-[20px] md:text-[16px]">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <button type="button"
              className="w-6 text-white cursor-pointer stroke-current md:hidden"
            >
              <Menu name="menu" />
            </button>
          </div>
        </div>

      </nav>
    </header>
  )
}
