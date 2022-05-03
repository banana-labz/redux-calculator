import React from "react"

import { Row, Col } from "antd"
import { useActions } from "react-redux-actions-hook"

import { Key } from "./Key"

import * as reduxActionList from "../redux/slices"

export const Keypad = () => {
  const { add, remove, clear, compute } = useActions(reduxActionList)

  return (
    <div style={style.grid}>
      <Key content="+" action={add}/>
      <Key content="-" action={add}/>
      <Key content="*" action={add}/>
      <Key content="/" action={add}/>

      <Key content="1" action={add}/>
      <Key content="2" action={add}/>
      <Key content="3" action={add}/>
      <Key content="C" action={clear}/>

      <Key content="4" action={add}/>
      <Key content="5" action={add}/>
      <Key content="6" action={add}/>
      <Key content="<=" action={remove}/>

      <Key content="7" action={add}/>
      <Key content="8" action={add}/>
      <Key content="9" action={add}/>
      <Key content="=" action={compute}/>

      <Key content="0" action={add} style={style.zero}/>
      <Key content="." action={add}/>
    </div>
  )
}

const style = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px"
  },
  zero: {
    gridColumnStart: "1",
    gridColumnEnd: "3"
  }
}