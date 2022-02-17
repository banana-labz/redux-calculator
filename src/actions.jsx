const add = payload => ({ type: "ADD", payload })
const remove = () => ({ type: "REMOVE" })
const compute = () => ({ type: "COMPUTE" })

export {
    add,
    remove,
    compute
}