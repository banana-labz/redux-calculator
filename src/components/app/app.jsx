import { FaBackspace } from "react-icons/fa"
import { connect } from "react-redux"
import * as actions from "../../actions"

const BUTTONS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"]
/*
<div className="calculator-body">
    <div className="display-block skewed-shadow">
        <Display display={this.props.display}/>
    </div>
    <div className="keypad-block">
        <Keypad display={this.props.display}/>
    </div>
</div>
*/
const App = ({ string, add, remove, compute }) => {
    return (
    <div>
        <h2>CALCULATOR</h2>
        <h3>{string}</h3>
        {BUTTONS.map(i =>
            <button 
                key={`button${i}`}
                onClick={() => add(i)}>
                {i}
            </button>
        )}
        <button key="delete" onClick={remove}><FaBackspace/></button>
        <button key="compute" onClick={compute}>Compute</button>
    </div>)
}

const mapStateToProps = state => ({
    string: state
})

export default connect(mapStateToProps, actions)(App)