import { createSlice } from "@reduxjs/toolkit"

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
    }
  }
})

export const { clear, add, remove } = expressionSlice.actions
export default expressionSlice.reducer