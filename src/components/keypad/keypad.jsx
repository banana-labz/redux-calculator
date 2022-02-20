import { connect } from "react-redux"
import { FaBackspace } from "react-icons/fa"

import { useAudio } from "../../hooks/use-audio"
import { CustomButton } from "./custom-button"
import * as actions from "../../actions"

import "./keypad.css"

const NormalButton = CustomButton("button-normal")
const WideButton = CustomButton("button-wide")
const HighButton = CustomButton("button-high")

const Keypad = connect(null, actions)(({ add, remove, clear, compute }) => {
    
    const FunkyButton = ({ char }) => {
        const [ playing, setPlaying ] = useAudio(`../../sounds/${char}.mp3`)
        
        const onClick = async () => {
            add(char)
            setPlaying(false)
            setTimeout(() => setPlaying(true), 0)
        }
        
        return (
            <NormalButton key={`button{${char}}`} onClick={onClick}>
                {char}
            </NormalButton>
        )
    }
    const DefaultButton = ({ char }) => {
        return (
            <NormalButton key={`button{${char}}`} onClick={() => add(char)}>
                {char}
            </NormalButton>
        )
    }
    return (
        <div className="keypad">
            <div className="keypad-panel">
                <div className="keypad-left">
                    <div>
                        <DefaultButton char="+"/>
                        <DefaultButton char="-"/>
                        <DefaultButton char="*"/>
                    </div>
                    <div>
                        <FunkyButton char="1"/>
                        <FunkyButton char="2"/>
                        <FunkyButton char="3"/>
                    </div>
                    <div>
                        <FunkyButton char="4"/>
                        <FunkyButton char="5"/>
                        <FunkyButton char="6"/>
                    </div>  
                    <div>
                        <FunkyButton char="7"/>
                        <FunkyButton char="8"/>
                        <FunkyButton char="9"/>
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