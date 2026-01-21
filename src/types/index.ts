
export type Card = {
  id: number,
  img: string
  title: string
  description: string
  linkGit: string
  linkDemo: string
  lan: string
  techs: string
}

export type Work = {
  id: number
  logo: string
  date: string
  month: string
  role: string
  title: string
  description: string[]
  techs: string
  lan: string
}

export type userInputs = {
  name: string
  email: string
  message: string
}