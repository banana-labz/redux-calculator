import React from "react"

import { Row } from "antd"
import { useActions } from "react-redux-actions-hook"

import { Key } from "./Key"

import * as reduxActionList from "../redux/slices"

export const Keypad = () => {
  const { add, remove, clear } = useActions(reduxActionList)

  return (
    <>
      <Row>
        <Key content="1" action={add}/>
        <Key content="2" action={add}/>
        <Key content="3" action={add}/>
      </Row>
      <Row>
        <Key content="4" action={add}/>
        <Key content="5" action={add}/>
        <Key content="6" action={add}/>
      </Row>
      <Row>
        <Key content="7" action={add}/>
        <Key content="8" action={add}/>
        <Key content="9" action={add}/>
      </Row>
    </>
  )
}