import { useState, useEffect } from "react"

export const useAudio = url => {
    const [ audio ] = useState(new Audio(url))
    const [ playing, setPlaying ] = useState(false)
  
    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [ playing ]) // on playing change
  
    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false))
        return () => audio.removeEventListener("ended", () => setPlaying(false))
    }, []) // component did mount
  
    return [ playing, setPlaying ]
}