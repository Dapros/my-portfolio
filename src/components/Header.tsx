import { Turn as Hamburger} from 'hamburger-react'
import { IoMdHome } from "react-icons/io";
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

  // Estilos reutilizables para los links de navegación (Desktop)
  const navLinkStyles = "px-4 py-2 rounded-full text-text-p font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(255,107,107,0.4)]";
  const navLinkHome = "p-2 rounded-full text-text-p font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_15px_rgba(255,107,107,0.4)] text-xl"

  return (
    <div className={`sticky top-1 mb-2 z-50 ${!shadow && 'shadow'}`}>
      <header className={`flex justify-between px-5 py-4 items-center lg:w-2/3 mx-auto rounded-full backdrop-blur-2xl ${shadow && 'shadow-md border-1 border-primary/30'}`}>
        <a className="flex items-center" href='#'>
          <img
            src="/assets/Sergio-Romero-Logo-2026.svg"
            className="h-10"
          />
          <h1 className="font-display font-bold text-lg md:text-xl text-text-main tracking-wide uppercase ml-2">
            Sergio Romero
          </h1>
        </a>

        {/* NAVEGACIÓN DESKTOP (Aquí están los cambios) */}
        <nav className="hidden lg:flex items-center space-x-2 text-sm font-body">
          <a href="#" className={navLinkHome}><IoMdHome /></a>
          <a href="#about" className={navLinkStyles}>About</a>
          <a href="#work" className={navLinkStyles}>Work</a>
          <a href="#contact" className={navLinkStyles}>Contact</a>
        </nav>

        <div className='relative lg:hidden' ref={menuRef}>
          <Hamburger 
            size={25} 
            toggled={isOpen} 
            toggle={setOpen}
            color="var(--color-cyan)"
          />
          {isOpen && (
            <div className='absolute -right-1 w-60 md:w-92 rounded-lg top-18 backdrop-blur-2xl border border-primary/30 shadow-md shadow-primary/20'>
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
