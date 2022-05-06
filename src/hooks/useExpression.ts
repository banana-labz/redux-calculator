import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export const useExpression = () => (
  useSelector<RootState, string>(state => state.counter.expression)
)