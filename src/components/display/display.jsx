import { connect } from "react-redux"

import "./display.css"

const mapStateToProps = state => ({ string: state })

export const Display = connect(mapStateToProps)(({ string }) => (
    <div className="display">
        <div className="display-screen">
            <h3 className="display-resulttext">{string}</h3>
        </div>
    </div>
))

