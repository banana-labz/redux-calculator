import { ButtonProps } from "antd"

export type KeyProps = Omit<ButtonProps, "children"> & {
  action: (content: string) => void
  content: string,
  icon?: React.ReactElement
}

export type FunkyKeyProps = KeyProps & {
  volume?: number
}