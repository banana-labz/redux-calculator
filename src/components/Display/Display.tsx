import "./Display.css"
import { Typography } from "antd"
import { useExpression } from "../../hooks"

const { Text } = Typography

export const Display = () => {
  const expression = useExpression()
  
  return (
    <div className="display">
      <Text className="display-text" children={expression}/>
    </div>
  )
}