import { BrowserRouter } from 'react-router-dom'

import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import ProyectCards from './components/ProyectCards'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
    
    <Header />
    
    <div className="w-3/4 mx-auto">
      <div className="py-5 space-y-24">
        
        <Hero />
        <About />

        <section id="work">
          <h1 className="flex justify-center py-5 text-2xl font-bold text-white lg:justify-start md:text-4xl">My Proyects</h1>
          <div className="grid w-full grid-cols-1 gap-y-20 2xl:grid-cols-3 xl:grid-cols-2">
            <ProyectCards />
          </div>
        </section>
        
        <Contact />
 
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
