import { createSlice } from "@reduxjs/toolkit"

const PRECISION = 4

const expressionSlice = createSlice({
  name: "expression",
  
  initialState: {
    expression: "",
  },

  reducers: {
    clear: (state) => {
      state.expression = ""
    },
    add: (state, { payload }) => {
      state.expression += payload
    },
    remove: (state) => {
      const { expression } = state
      state.expression = expression.substring(0, expression.length - 1)
    },
    compute: (state) => {
      const { expression } = state

      const result = eval(expression.replace(/[^-()\d/*+.]/g, ""))
      if (result) {
        const power = Math.pow(10, PRECISION)
        const output = Math.round(result * power + Number.EPSILON * power) / power
        state.expression = output.toString()
      }
    }
  }
})

export const { clear, add, remove, compute } = expressionSlice.actions
export default expressionSlice.reducer