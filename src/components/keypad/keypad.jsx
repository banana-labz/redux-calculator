import { Fragment } from "react"
import { connect } from "react-redux"
import { FaBackspace } from "react-icons/fa"
import { CustomButton } from "./custom-button"
import * as actions from "../../actions"

import "./custom-button.css"

const NormalButton = CustomButton("button-normal")
const WideButton = CustomButton("button-wide")
const HighButton = CustomButton("button-high")

const Keypad = connect(null, actions)(({ add, remove, clear, compute }) => {
    
    const DefaultButton = ({ char }) => (
        <NormalButton 
            key={`button{${char}}`} 
            onClick={() => add(char)}
        >
            {char}
        </NormalButton>
    )

    return (
        <Fragment>
            <DefaultButton char="+"/>
            <DefaultButton char="-"/>
            <DefaultButton char="*"/>
            <DefaultButton char="/"/>
            <DefaultButton char="1"/>
            <DefaultButton char="2"/>
            <DefaultButton char="3"/>
            <NormalButton key="button{C}" onClick={clear}>C</NormalButton>
            <DefaultButton char="4"/>
            <DefaultButton char="5"/>
            <DefaultButton char="6"/>
            <NormalButton key="button{R}" onClick={remove}><FaBackspace/></NormalButton>
            <DefaultButton char="7"/>
            <DefaultButton char="8"/>
            <DefaultButton char="9"/>
            <WideButton key="button{0}" onClick={() => add("0")}>0</WideButton>
            <DefaultButton char="."/>
            <HighButton key="button{comp}" onClick={compute}>=</HighButton>
        </Fragment>
    )
})

export { Keypad }