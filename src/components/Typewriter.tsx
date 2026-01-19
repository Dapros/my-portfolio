import { useEffect, useState } from "react"

type TypewriterProps = {
  textArray: string[],
  typingSpeed?: number,
  deletingSpeed?: number,
  pauseTime?: number
}

const Typewriter = ({ textArray, typingSpeed, deletingSpeed, pauseTime } : TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed)

  useEffect(() => {
    const i = loopNum % textArray.length
    const fullText = textArray[i]

    const handleTyping = () => {
      setDisplayedText(
        isDeleting 
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      )

      // velocidad dinamica
      setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed)

      // al terminar de escribir palabra completa
      if(!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      }
      if (isDeleting && displayedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    let timer = setTimeout(handleTyping, typingSpeedState)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, loopNum, textArray, typingSpeed, deletingSpeed, pauseTime, typingSpeedState])

  return (
    <span className="text-primary font-code font-bold">
      <span className="text-accent mr-2">$</span>
      {displayedText}
      <span className="animate-cursor ml-1 border-r-2 border-primary h-5 inline-block align-middle"></span>
    </span>
  )
}

export default Typewriter