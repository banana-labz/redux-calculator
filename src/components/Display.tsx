import { Typography } from "antd"

import { useExpression } from "../hooks"

const { Text } = Typography

export const Display = () => {
  const expression = useExpression()
  return (
    <Text>
      {expression}
    </Text>
  )
}