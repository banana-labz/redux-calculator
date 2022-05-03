import React from "react"

import { Provider } from "react-redux"

import { Keypad } from "./Keypad"
import { Display } from "./Display"

import store from "../redux/store"

const App = () => (
  <Provider store={store}>
    <Display/>
    <Keypad/>
  </Provider>
)

export default App
