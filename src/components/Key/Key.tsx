import { Button } from "antd"
import { KeyProps } from "./types"

export const Key = ({ icon, content, action, ...other }: KeyProps) => {
  const handleClick = () => {
    action(content)
  }

  return (
    <Button {...other} onClick={handleClick}>
      {icon}
      {content}
    </Button>
  )
}