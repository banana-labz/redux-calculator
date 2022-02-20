import { connect } from "react-redux"
import { FaBackspace } from "react-icons/fa"

import { CustomButton } from "./custom-button"
import { FunkyButton } from "./funky-button"

import * as actions from "../../actions"

import "./keypad.css"

export const Keypad = connect(null, actions)(({ add, remove, clear, compute }) => (
    <div className="keypad">
        <div className="keypad-panel">
            <div className="keypad-left">
                <div key="left-row-first">
                    <CustomButton className="button-normal" onClick={() => add("+")}>+</CustomButton>
                    <CustomButton className="button-normal" onClick={() => add("-")}>-</CustomButton>
                    <CustomButton className="button-normal" onClick={() => add("*")}>*</CustomButton>
                </div>
                {[1, 4, 7].map(base => (
                    <div key={`left-row-${base}`}>{
                        [0, 1, 2].map(i => (
                            <FunkyButton 
                                key={`button{${base + i}}`} 
                                char={(base + i).toString()} 
                                add={add}
                            />
                        )
                    )}</div>
                ))}
                <div key="left-row-last">
                    <CustomButton className="button-wide" onClick={() => add("0")}>0</CustomButton>
                    <CustomButton className="button-normal" onClick={() => add(".")}>.</CustomButton>
                </div>
            </div>
            <div className="keypad-right">
                <div key="right-row-first">
                    <CustomButton className="button-normal" onClick={() => add("/")}>/</CustomButton>
                </div>
                <div key="right-row-second">
                    <CustomButton className="button-normal" onClick={clear}>C</CustomButton>
                </div>
                <div key="right-row-third">
                    <CustomButton className="button-normal" onClick={remove}>
                        <FaBackspace/>
                    </CustomButton>
                </div>
                <div key="right-row-last">
                    <CustomButton className="button-high" onClick={compute}>=</CustomButton>
                </div>
            </div>
        </div>
    </div>
))