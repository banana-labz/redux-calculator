import { configureStore } from "@reduxjs/toolkit"

import expressionSlice from "./slices/expressionSlice"

const store = configureStore({
  reducer: {
    counter: expressionSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
