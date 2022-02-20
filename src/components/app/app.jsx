import { Keypad } from "../keypad"
import { Display } from "../display"

import "./app.css"

export const App = () => (
    <div className="calculator">
        <Display/>
        <Keypad/>
    </div>
)