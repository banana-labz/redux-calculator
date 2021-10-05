import {useState} from "react"

const initialCalcString = ""
const binaryOperators = [ "+", "*", "/", "%", "^" ]
const specialOperators = [ "-", "(", ")" ]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const [ calcString, setCalcString] = useState(initialCalcString)

    const getComponentByOperator = operator => {
        const onClick = () => setCalcString(`${calcString} ${operator} `)
        return <button onClick={onClick}>{operator}</button>
    }

    const getComponentByNumber = number => {
        const onClick = () => setCalcString(calcString + number)
        return <button onClick={onClick}>{number}</button>
    }

    const deleteAll = () => setCalcString("")

    const Backspace = () => {
        const len = calcString.length
        const stepsFromEnd = calcString[len - 1] === " " ? 3 : 1
        setCalcString(calcString.substr(0, len - stepsFromEnd))
    }

    return (
        <div>
            <label for="main__input">Calculator: </label>
            <input type="text" name="main__input" value={calcString}/>
            {binaryOperators.map(operator => {
                return getComponentByOperator(operator)
            })}
            {numbers.map(number => {
                return getComponentByNumber(number)
            })}
            <button onClick={deleteAll}>C</button>
            <button onClick={Backspace}>Backspace</button>
        </div>
    )
}

export default App
