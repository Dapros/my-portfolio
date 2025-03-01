import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Work from "./components/Work"

function App() {
  

  return (
    <div>
      <Header />

      <main className="lg:w-2/3 mx-auto font-poppins px-5">
        <Landing />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
