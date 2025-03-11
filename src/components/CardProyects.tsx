import { Card } from "../types"
import { ExternalLink, Globe } from "lucide-react"
import { FaGithub } from "react-icons/fa";


type CardProyectsProp = {
  card: Card
}

export default function CardProyects({card} : CardProyectsProp) {
  return (
    <div className="bg-2 rounded-2xl p-5 h-[700px]">
      <div className="relative">
        <img
          src={card.img} alt="Imagen" className="rounded-xl" 
        />
        <div className="flex items-center absolute top-4 right-4 space-x-4">
          <a href={card.linkDemo} target="_blank" className="bg-2 rounded-full p-2 shadow-md">
            <ExternalLink size={20} />
          </a>
          <a href={card.linkGit} target="_blank" className="bg-2 rounded-full p-2 shadow-md">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="pt-4 flex flex-col justify-between h-[400px]">
        <div>
          <h2 className="text-xl font-extrabold">{card.title}</h2>
          <p className="pt-2">{card.description}</p>
        </div>

        <div>
          <p className="flex items-center text-sm space-x-1 bg-theme w-fit my-5 px-4 py-1 font-bold text-tertiary rounded-full shadow">
            <Globe size={15}/>
            <span>{card.lan}</span>
          </p>

          <p className="text-sm flex space-x-2">
            <span className="text-secondary">{card.techs}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
