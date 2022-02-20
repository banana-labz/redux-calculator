import { connect } from "react-redux"
import { FaBackspace } from "react-icons/fa"


import { CustomButton } from "./custom-button"
import { DefaultButton } from "./default-button"
import { FunkyButton } from "./funky-button"

import * as actions from "../../actions"

import "./keypad.css"

export const Keypad = connect(null, actions)(({ add, remove, clear, compute }) => (
    <div className="keypad">
        <div className="keypad-panel">
            <div className="keypad-left">
                <div>
                    <DefaultButton char="+" add={add}/>
                    <DefaultButton char="-" add={add}/>
                    <DefaultButton char="*" add={add}/>
                </div>
                {[1, 4, 7].map(v => (
                    <div>
                        <FunkyButton char={v.toString()} add={add}/>
                        <FunkyButton char={(v + 1).toString()} add={add}/>
                        <FunkyButton char={(v + 2).toString()} add={add}/>
                    </div>
                ))}
                <div>
                    <CustomButton 
                        key="button{0}"
                        className="button-wide"
                        onClick={() => add("0")}
                    >
                        0
                    </CustomButton>
                    <DefaultButton char="." add={add}/>
                </div>
            </div>
            <div className="keypad-right">
                <div>
                    <DefaultButton char="/" add={add}/>
                </div>
                <div>
                    <CustomButton
                        key="button{C}"
                        className="button-normal"
                        onClick={clear}
                    >
                        C
                    </CustomButton>
                    </div>
                <div>
                    <CustomButton
                        key="button{R}"
                        className="button-normal"
                        onClick={remove}
                    >
                        <FaBackspace/>
                    </CustomButton>
                </div>
                <div>
                    <CustomButton 
                        key="button{comp}"
                        className="button-high"
                        onClick={compute}
                    >
                        =
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
))