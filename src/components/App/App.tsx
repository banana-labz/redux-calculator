import "./App.css"

import { Provider } from "react-redux"
import { Layout } from "../Layout"
import { Keypad } from "../Keypad"
import { Display } from "../Display"

import store from "../../redux/store"

export const App = () => (
  <Provider store={store}>
    <Layout hp="40%">
      <div className="main">
        <Display/>
        <Keypad/>
      </div>
    </Layout>
  </Provider>
)