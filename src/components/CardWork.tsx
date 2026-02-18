import { Work } from "../types"

type CardWorkProp = {
  work: Work
}

export default function CardWork({ work } : CardWorkProp) {
  const descriptionPoints = work.description
  const listItems = descriptionPoints.map((point, index) => (
    <li key={index}>{point}</li>
  ))

  return (
    <div className="relative mt-15 p-2 md:p-4 max-w-4xl bg-surface rounded-lg border border-primary/30 backdrop-blur-sm animate-shadow-orbit-2">
      {/* Fecha para pantallas > md */}
      <div className="absolute -z-10 top-0 left-0 -translate-x-10.5 sm:-translate-x-11 md:-translate-x-12 xl:-translate-x-12.5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white">
        <h2 className="z-0 -translate-x-28 invisible md:visible bg-primary w-fit px-2 rounded-full font-bold text-base font-body">{work.date}</h2>
        <p className="z-0 -translate-x-2/3 w-52 invisible md:visible text-main font-body">{work.month}</p>
      </div>

      {/* Fecha para pantallas < md */}
      <div className="flex items-center md:hidden">
        <h2 className="bg-primary rounded-full font-bold text-base px-2 font-body">{work.date}</h2>
        <p className="ml-4 text-main font-body">{work.month}</p>
      </div>

      {/* Contenido principal */}
      <div className="space-y-2 mt-2 md:mt-0">
        <div className="flex items-center space-x-2">
          <img src={work.logo} alt={work.title} className="w-12 rounded-full" />
          <div>
            <h1 className="font-bold font-body text-primary text-lg md:text-xl">{work.role}</h1>
            <h2 className="font-body text-text-p text-base md:text-lg">
              {work.title} | <span className="">{work.lan}</span>
            </h2>
          </div>
        </div>

        <ul className="ml-18 my-4 font-body list-disc space-y-1">
          {listItems}
        </ul>
        <p className="bg-black/60 border border-white/10 rounded-lg p-3 shadow-inner font-code">
          <span className="text-accent">$ </span>
          <span className="font-bold text-primary">Tech & tools </span>
          {work.techs}
        </p>
      </div>
    </div>
  )
}
