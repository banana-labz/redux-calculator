import "./Keypad.css"
import Back from "../../assets/Back"
import { useActions } from "react-redux-actions-hook"
import { Key, FunkyKey } from "../Key"
import * as reduxActionList from "../../redux/slices"

export const Keypad = () => {
  const { add, remove, clear, compute } = useActions(reduxActionList)

  return (
    <div className="keypad-layout">
      <Key content="+" action={add}/>
      <Key content="-" action={add}/>
      <Key content="*" action={add}/>
      <Key content="/" action={add}/>

      <FunkyKey content="1" action={add}/>
      <FunkyKey content="2" action={add}/>
      <FunkyKey content="3" action={add}/>
      <Key content="C" action={clear}/>

      <FunkyKey content="4" action={add}/>
      <FunkyKey content="5" action={add}/>
      <FunkyKey content="6" action={add}/>
      <Key icon={<Back />} content="" action={remove}/>

      <FunkyKey content="7" action={add}/>
      <FunkyKey content="8" action={add}/>
      <FunkyKey content="9" action={add}/>
      <Key content="=" action={compute} className="keypad-layout__equals"/>

      <FunkyKey content="0" action={add} className="keypad-layout__zero"/>
      <Key content="." action={add}/>
    </div>
  )
}