import { Button, ButtonProps } from "antd"

export type KeyProps = Omit<ButtonProps, "children"> & {
  content: string,
  action: (content: string) => void
}

export const Key = ({ content, action, ...other }: KeyProps) => {
  const handleClick = () => {
    action(content)
  }

  return (
    <Button {...other} onClick={handleClick}>
      {content}
    </Button>
  )
}