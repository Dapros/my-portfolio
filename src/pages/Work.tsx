import { useState } from "react"
import { cardsinfoproject } from "../data/cardsinfoproject"
import { cardinfowork } from "../data/cardinfowork"
import CardProyects from "../components/CardProyects"
import CardWork from "../components/CardWork"
import { info } from "../data/info";

export default function Work() {
  
  const [ data ] = useState(cardsinfoproject)
  const [ workData ] = useState(cardinfowork)
  const [ infoData ] = useState(info)

  return (
    <>
       <article className="my-10 lg:my-20 scroll-mt-24" id="work">
        {/* Experiencia */}
        <section className="px-4">
          <h3 className="uppercase font-bold font-body text-sm lg:text-lg">{infoData[3].pretitle}</h3>
          <h1 className="font-extrabold font-display text-3xl md:text-4xl lg:text-6xl text-primary pb-1">{infoData[3].title}</h1>
          <hr className="h-1 my-2 bg-accent border-none w-28 rounded-xl" />
        </section>

        <div className="px-4 md:px-0 w-fit md:ml-52 my-15 h-full flex">
          <div className="bg-gradient-brand w-2 mx-4 rounded-full"></div>
          <div className="space-y-32 mx-4">
            {workData.map(work => (
              <CardWork
                key={work.id}
                work={work}
              />
            ))}
          </div>
        </div>

        {/* Proyectos */}
        <section className="px-4 max-w-7xl mx-auto">
          <h3 className="uppercase font-bold font-body text-sm lg:text-lg text-accent tracking-wider">
            {infoData[4].pretitle}
          </h3>
          <h1 className="font-extrabold font-display text-3xl md:text-4xl lg:text-6xl text-primary pb-2">
            {infoData[4].title}
          </h1>
          <hr className="h-1.5 mt-2 mb-6 bg-accent border-none w-24 rounded-full" />
          <p className="py-2 text-base md:text-lg font-body lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {infoData[4].description}
          </p>
        </section>
        <div className="px-4 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
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
