import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import Work from "./pages/Work"

function App() {
  

  return (
    <div>
      <Header />

      <main className="lg:w-2/3 mx-auto px-5">
        <Landing />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
