import { connect } from "react-redux"
import { FaBackspace } from "react-icons/fa"
import { CustomButton } from "./custom-button"
import * as actions from "../../actions"

import "./keypad.css"

const NormalButton = CustomButton("button-normal")
const WideButton = CustomButton("button-wide")
const HighButton = CustomButton("button-high")

const Keypad = connect(null, actions)(({ add, remove, clear, compute }) => {
    
    const DefaultButton = ({ char, className }) => (
        <NormalButton 
            key={`button{${char}}`}
            className={className}
            onClick={() => add(char)      
        }>
            {char}
        </NormalButton>
    )

    return (
        <div className="keypad">
            <div className="keypad-panel">
                <div className="keypad-left">
                    <div>
                        <DefaultButton char="+" className="white"/>
                        <DefaultButton char="-"/>
                        <DefaultButton char="*"/>
                    </div>
                    <div>
                        <DefaultButton char="1"/>
                        <DefaultButton char="2"/>
                        <DefaultButton char="3"/>
                    </div>
                    <div>
                        <DefaultButton char="4"/>
                        <DefaultButton char="5"/>
                        <DefaultButton char="6"/>
                    </div>  
                    <div>
                        <DefaultButton char="7"/>
                        <DefaultButton char="8"/>
                        <DefaultButton char="9"/>
                    </div>
                    <div>
                        <WideButton key="button{0}" onClick={() => add("0")}>0</WideButton>
                        <DefaultButton char="."/>
                    </div>
                </div>
                <div className="keypad-right">
                    <div><DefaultButton char="/"/></div>
                    <div><NormalButton key="button{C}" onClick={clear}>C</NormalButton></div>
                    <div><NormalButton key="button{R}" onClick={remove}><FaBackspace/></NormalButton></div>
                    <div><HighButton key="button{comp}" onClick={compute}>=</HighButton></div>
                </div>
            </div>
        </div>
    )
})

/*

*/
export { Keypad }