import { Card } from "../types"
import { ExternalLink, Globe } from "lucide-react"
import { FaGithub } from "react-icons/fa";

type CardProyectsProp = {
  card: Card
}

export default function CardProyects({card} : CardProyectsProp) {
  return (
    // Cambiamos la altura fija por flex y h-full para que todas las cards del grid midan lo mismo
    <div className="bg-surface rounded-2xl p-5 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/50">
      
      {/* Contenedor de la imagen con aspect-ratio para mantener proporción */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden group">
        <img
          src={card.img} 
          alt={`Imagen del proyecto ${card.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Botones con hover states para mejor UX */}
        <div className="flex items-center absolute top-4 right-4 space-x-3 opacity-90">
          <a 
            href={card.linkDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface/90 hover:bg-primary hover:text-white text-primary transition-colors duration-300 rounded-full p-2 shadow-md backdrop-blur-sm"
            aria-label="Ver demo en vivo"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={card.linkGit} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface/90 hover:bg-primary hover:text-white text-primary transition-colors duration-300 rounded-full p-2 shadow-md backdrop-blur-sm"
            aria-label="Ver código en GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Contenedor del texto: flex-grow empuja el footer hacia abajo */}
      <div className="pt-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-extrabold font-body text-primary">{card.title}</h2>
          <p className="pt-3 font-body text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            {card.description}
          </p>
        </div>

        {/* Footer de la card */}
        <div className="pt-6 mt-auto">
          <p className="inline-flex items-center text-xs space-x-1 bg-accent/20 px-3 py-1.5 font-bold text-accent rounded-full mb-3">
            <Globe size={14}/>
            <span>{card.lan}</span>
          </p>

          <p className="text-sm font-medium text-primary/80">
            {card.techs}
          </p>
        </div>
      </div>
    </div>
  )
}