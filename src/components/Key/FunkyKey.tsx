import { Button } from "antd"
import { FunkyKeyProps } from "./types"
import useSound from "use-sound"

export const FunkyKey = ({ icon, volume = 1, content, action, ...other }: FunkyKeyProps) => {
  const [play] = useSound(`../../sounds/${content}.mp3`, { volume })
  
  const handleClick = () => {
    play()
    action(content)
  }

  return (
    <Button {...other} onClick={handleClick}>
      {icon}
      {content}
    </Button>
  )
}