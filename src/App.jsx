import {useState} from "react"

// binary operators are always wrapped into 2 spaces.

const initialCalcString = ""
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const binaryOperators = [ "+", "*", "/", "%", "^" ]

const specialOperators = {
    "-": (str) => str[str.length - 1] === " " || str[str.length - 1] === "-", 
    "(": (str) => { // fixme
        const lastChar = str[str.length - 1]
        return /\d/.test(lastChar)
    },  
    ")": (str) => {
        let count = 0;
        for (const i in str) {
            if (str[i] === "(") {
                count++
            }
            if (str[i] === ")") {
                count--
            }
        }
        return count <= 0
        // check if valid bracket chain
    }
}

function App() {
    const [ calcString, setCalcString] = useState(initialCalcString)

    const binaryOperatorBtn = operator => {
        const strlen = calcString.length
        const disabled = strlen === 0 || calcString[strlen - 1] === " "
        const onClick = () => setCalcString(`${calcString} ${operator} `)
        return (
            <button 
                onClick={onClick} 
                disabled={disabled}
            >
                {operator}
            </button>
        )
    }

    const specialOperatorBtn = key => {
        const onClick = () => setCalcString(calcString + key)
        return (
        <button 
            onClick={onClick} 
            disabled={specialOperators[key](calcString)}
        >
            {key}
        </button>
        )    
    }

    const numberBtn = number => {
        const onClick = () => setCalcString(calcString + number)
        return <button onClick={onClick}>{number}</button>
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
            {binaryOperators.map(operator => binaryOperatorBtn(operator))}
            {numbers.map(number => numberBtn(number))}
            <button onClick={() => setCalcString("")}>C</button>
            <button onClick={() => {
                const len = calcString.length
                const stepsFromEnd = calcString[len - 1] === " " ? 3 : 1
                setCalcString(calcString.substr(0, len - stepsFromEnd))
            }}>
                Backspace
            </button>

            {Object.keys(specialOperators).map(key =>  specialOperatorBtn(key))}
        </div>
    )
}

export default App
