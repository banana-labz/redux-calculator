import { useState } from "react"

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const BINARY_OPERATORS = ["+", "*", "/", "%", "^"]

/// shortcuts 
// checks if char is digit
const isDigit = char => /\d/.test(char)
// gets string last character
const lchar = str => str[str.length - 1]
///

// checks if string is valid bracket chain: 
// = 0 => valid; < 0 => missing `(`; > 0 => missing `)`
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

const specialOperators = {
    "-": {
        isAllowed: str => lchar(str) === " " || lchar(str) === "-",
        onClick: str => isDigit(lchar(str)) ? `${str} - ` : (str + '-')
    },
    "(": {
        isAllowed: str => isDigit(lchar(str)),
        onClick: str => str + "("
    },
    ")": {
        isAllowed: str => getBracketChainOffset(str) <= 0 || lchar(str) === "(" || lchar(str) === "-",
        onClick: str => str + ")"
    }
}

function App() {
    const [ calcString, setCalcString] = useState("")

    const binaryOperatorBtn = operator => {
        const disabled = calcString.length === 0 || lchar(calcString) === " " || lchar(calcString) === "(" || lchar(calcString) === "-"
        const onClick = () => setCalcString(`${calcString} ${operator} `)
        return <button onClick={onClick} disabled={disabled}>{operator}</button>
    }

    const specialOperatorBtn = key => {
        const onClick = () => setCalcString(specialOperators[key].onClick(calcString))
        return <button onClick={onClick} disabled={specialOperators[key].isAllowed(calcString)}>{key}</button>
    }

    const numberBtn = number => {
        const onClick = () => setCalcString(calcString + number)
        return <button onClick={onClick}>{number}</button>
    }

    const onBackspace = () => {
        const len = calcString.length
        const stepsFromEnd = lchar(calcString) === " " ? 3 : 1
        setCalcString(calcString.substr(0, len - stepsFromEnd))
    }

    return (
        <div>
            <label htmlFor="main__input">Calculator</label>
            <input 
                type="text" 
                name="main__input" 
                value={calcString} 
                onChange={event => setCalcString(event.target.value)
            }/>
            {DIGITS.map(number => numberBtn(number))}
            {BINARY_OPERATORS.map(operator => binaryOperatorBtn(operator))}
            {Object.keys(specialOperators).map(key => specialOperatorBtn(key))}   
            <button onClick={onBackspace}>Backspace</button>
            <button onClick={() => setCalcString("")}>C</button>
        </div>
    )
}

export default App
