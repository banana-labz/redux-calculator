const PRECISION = 4

export const reducer = (state = "", { type, payload : char }) => {
    switch (type) {
        case "COMPUTE": {
            const result = eval(state)
            if (result) {
                const power = Math.pow(10, PRECISION)
                const output = Math.round(result * power + Number.EPSILON * power) / power
                return output.toString()
            }
            else {
                return state
            }
        }
        case "ADD": 
            return state + char
        case "REMOVE":
            return state.substring(0, state.length - 1)
        case "CLEAR":
            return ""
        default:
            return state;
    }
}