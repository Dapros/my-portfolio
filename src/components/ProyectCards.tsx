import { ExternalLink, Github } from "lucide-react";

import { proyects } from "../db/proyects";
import { useState } from "react";

export default function ProyectCards() {

  const [data] = useState(proyects)

  return (
    <>
      {data.map(proyect => (
        <div className="max-w-[400px] bg-[#313134] p-4 rounded-md mx-auto ">
        <img src={`${proyect.img}`}
          className="rounded-md"
        />
        
        <div className="text-white">
          <div className="flex items-center justify-between pb-1 pt-5">
            <h1 className="font-bold  text-3xl">{proyect.title}</h1>
            <div className=" flex items-center space-x-2">
              <a href="#"
                className="flex w-9 h-9 border rounded-md justify-center items-center"
              ><Github/></a>
              <a href="#"
                className="flex w-9 h-9 border rounded-md justify-center items-center"
              ><ExternalLink /></a>
            </div>
          </div>

            <p className=" font-thin">#React  #next  #Tailwind</p>
            <p className="py-5">
              {proyect.details}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
