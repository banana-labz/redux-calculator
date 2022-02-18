const add = payload => ({ type: "ADD", payload })
const remove = () => ({ type: "REMOVE" })
const clear = () => ({ type: "CLEAR" })
const compute = () => ({ type: "COMPUTE" })

export {
    add,
    remove,
    clear,
    compute
}