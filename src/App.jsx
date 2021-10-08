import { useState } from "react"
import { FaBackspace } from "react-icons/fa"
import "../src/index.css"

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const BINARY_OPERATORS = ["+", "*", "/", "%"]
const SPECIAL_OPERATORS = {
    "-": str => isBinOperator(last(str)) || [".", "-"].includes(last(str)),
    "(": str => isDigit(last(str)) || [".", ")", "("].includes(last(str)),
    ")": str => getBracketChainOffset(str) <= 0 || (!isDigit(last(str)) && last(str) !== ")"),
    ".": str => !isDigit(last(str)) || wasLastDotInSameWord(str),
}

/// shortcuts 
// checks if char is digit
const isDigit = char => /\d/.test(char)
const isBinOperator = char => BINARY_OPERATORS.includes(char)
//const isSpecialOperator = char => Object.keys(SPECIAL_OPERATORS).includes(char)
// gets string last character
const last = str => str[str.length - 1]
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
    const [ resultString, setResultString] = useState("")

    const binaryOperatorBtn = operator => {
        const forbidden = ["(", "-", "."].concat(BINARY_OPERATORS)
        const onClick = () => setCalcString(calcString + operator)
        return (
            <button
                className="operator"
                onClick={onClick}
                disabled={forbidden.includes(last(calcString)) || calcString.length === 0}
            >
                {operator}
            </button>
        )
    }

    const numberBtn = number => {
        const onClick = () => setCalcString(calcString + number)
        return (
            <button
                className="number"
                onClick={onClick}
                disabled={last(calcString) === ")"}
            >
                {number}
            </button>
        )
    }

    const specialOperatorBtn = operator => {
        const onClick = () => setCalcString(calcString + operator)
        return (
            <button
                className="operator"
                onClick={onClick}
                disabled={SPECIAL_OPERATORS[operator](calcString)}
            >
                {operator}
            </button>
        )
    }

    const onBackspace = () => {
        const len = calcString.length
        setCalcString(calcString.substr(0, len - 1))
    }
    
    return (
        <div className="main">
            <h3 htmlFor="main__input">Calculator</h3>
            <input
                type="text"
                name="main__input"
                value={calcString}
                onChange={event => setCalcString(event.target.value)
            }/>
            <div className="main__buttons">
                {DIGITS.map(number => numberBtn(number))}
                {BINARY_OPERATORS.map(operator => binaryOperatorBtn(operator))}
                {Object.keys(SPECIAL_OPERATORS).map(operator => specialOperatorBtn(operator))}
                <button onClick={onBackspace}><FaBackspace/></button>
                <button onClick={() => setCalcString("")}>C</button>
            </div>
            <div className="main__output">
                <input value={resultString} readOnly={true}/>
                <button className="main__compute" onClick={() => setResultString(eval(calcString))}>Compute</button>
            </div>
        </div>
    )
}