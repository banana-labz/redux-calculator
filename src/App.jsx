import { useState } from "react"
import { FaBackspace } from "react-icons/fa"

import logo from './logo.png'
import "../src/index.css"

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const BINARY_OPERATORS = ["+", "*", "/", "%"]

// [string, () => boolean] checks if operator can not be added to string
const SPECIAL_OPERATORS = {
    "-": str => isBinOperator(last(str)) || [".", "-"].includes(last(str)),
    "(": str => isDigit(last(str)) || [".", ")", "("].includes(last(str)),
    ")": str => getBracketChainOffset(str) <= 0 || (!isDigit(last(str)) && last(str) !== ")"),
    ".": str => !isDigit(last(str)) || wasLastDotInSameWord(str),
}

/// shortcuts 
const isDigit = char => /\d/.test(char) // checks if char is a digit
const isBinOperator = char => BINARY_OPERATORS.includes(char) // checks if char is a binary operator
const last = str => str[str.length - 1] // returns last character of a string
///

// checks if string is valid bracket chain: 
// = 0 => valid < 0 => missing `(` > 0 => missing `)`
const getBracketChainOffset = str => {
    let count = 0
    for (const i in str) {
        if (str[i] === "(")
            count++
        if (str[i] === ")") 
            count--
    }
    return count
}

// to avoid 1.01.2.3 numbers
const wasLastDotInSameWord = str => {
    let i = str.lastIndexOf(".") 
    if (i === -1) return false
    else i++ // skip the "." itself
    
    for(; i < str.length; i++) {
        if (!isDigit(str[i]))
            return false
    }
    return true         
}

export const App =() => {
    const [ calcString, setCalcString] = useState("")
    
    return (
        <div className="main">
            <img src={logo} alt="logo" />
            <input
                type="text"
                name="main__input"
                value={calcString}
                onChange={event => setCalcString(event.target.value)
            }/>
            <div className="main__button-container">
                {DIGITS.map(number => 
                    <button
                        onClick={() =>setCalcString(calcString + number)} 
                        disabled={last(calcString) === ")"}
                    >
                        {number}
                    </button>
                )}
                {BINARY_OPERATORS.map(operator => {
                    const forbidden = ["(", "-", "."].concat(BINARY_OPERATORS)
                    const onClick = () => setCalcString(calcString + operator)
                    return (
                        <button
                            onClick={onClick}
                            disabled={forbidden.includes(last(calcString)) || calcString.length === 0}
                        >
                            {operator}
                        </button>
                    )
                })}
                {Object.keys(SPECIAL_OPERATORS).map(operator => 
                    <button
                        onClick={() => setCalcString(calcString + operator)}
                        disabled={SPECIAL_OPERATORS[operator](calcString)}
                    >
                        {operator}
                    </button>
                )}
                <button onClick={() => setCalcString(calcString.substr(0, calcString.length - 1))}><FaBackspace/></button>
                <button onClick={() => setCalcString("")}>C</button>
            </div>
            <button className="main__compute" onClick={() => setCalcString(eval(calcString).toString())}>Compute</button>
        </div>
    )
}