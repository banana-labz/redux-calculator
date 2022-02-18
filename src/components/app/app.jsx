import { connect } from "react-redux"
import { Keypad } from "../keypad"

import logo from "./logo.png"
import "./app.css"

const App = ({ string }) => {

    return (
    <div className="calculator">
        <img className="calculator-logo" src={logo} alt="logo"/>
        <div className="calculator-body">
            <h3 className="calculator-display">{string}</h3>
            <Keypad/>
        </div>
    </div>)
}

const mapStateToProps = state => ({
    string: state
})

export default connect(mapStateToProps)(App)