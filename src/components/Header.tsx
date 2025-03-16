import { Turn as Hamburger} from 'hamburger-react'
import { useEffect, useRef, useState } from "react"

export default function Header() {

  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)){
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setShadow(true)
      } else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky top-1 mb-2 z-10 ${!shadow && 'shadow'}`}>
      <header className={`flex justify-between px-5 py-4 items-center lg:w-2/3 mx-auto rounded-full backdrop-blur-2xl ${shadow && 'shadow-md border-1 border-gray-200/30'}`}>
        <a className="flex items-center" href='#landing'>
          <img
            src="/DaprosLogosvg.svg"
            className="h-10"
          />
          <h1 className="font-medium text-md md:text-xl lg:text-xl pl-1 ">Sergio Romero - Dapros</h1>
        </a>

        <nav className="hidden lg:flex space-x-5 text-lg">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className='relative lg:hidden' ref={menuRef}>
          <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div className='absolute -right-1 w-60 md:w-92 rounded-lg top-18 bg-theme border border-primary'>
              <ul className='space-y-8 md:space-y-5 px-4 py-5'>
                <li className='w-full md:text-center md:text-xl'>
                  <a href="#about">About</a>
                </li>
                <li className='w-full md:text-center md:text-xl'>
                  <a href="#work">Work</a>
                </li>
                <li className='w-full md:text-center md:text-xl'>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
