import { CSSProperties } from "react"

// hp = horizontal padding
// vp = vertical padding

export type LayoutProps = {
  hp?: CSSProperties["paddingLeft"] | CSSProperties["paddingRight"]
  vp?: CSSProperties["paddingTop"] | CSSProperties["paddingBottom"]
  style?: Omit<CSSProperties, "padding">
  children: React.ReactElement | React.ReactElement[]
}

export const Layout = ({ children, style, hp = "20px", vp = "0px" }: LayoutProps) => (
  <div
    style={{ ...style, padding: `${vp} ${hp} ${vp} ${hp}` }}
    children={children}
  />
)