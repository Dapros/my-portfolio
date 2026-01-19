import { useState } from "react"
import { cardsinfo } from "../data/cardsinfo"
import CardProyects from "../components/CardProyects"

export default function Work() {
  
  const [ data ] = useState(cardsinfo)

  return (
    <>
       <article className="my-10 lg:my-20 scroll-mt-24" id="work">
        <section className="px-4">
          <h3 className="uppercase font-bold font-body text-sm lg:text-lg">My work</h3>
          <h1 className="font-extrabold font-display text-3xl md:text-4xl lg:text-6xl text-primary pb-1">Projects.</h1>
          <hr className="h-1 my-2 bg-accent border-none w-28 rounded-xl" />
          <p className="py-4 text-lg font-body lg:text-xl">
            Dive into my portfolio and discover first-hand my development experience. Each project is presented concisely, with clear descriptions and direct links to its GitHub repositories and live demos, highlighting my ability to solve technical challenges, master multiple technologies and approach each challenge with professionalism.
          </p>
        </section>
        <div className="px-4 my-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-fit">
          {data.map(card => (
            <CardProyects 
              key={card.id}
              card={card}
            />
          ))}
        </div>
       </article>
    </>
  )
}
