import React from 'react';
import '../styles/Keypad.css';

const Keypad = (props) => (
    <div>
        {
            props.status === null &&
            <div className="keypad">
                <div className="keypad-row">
                    <button className="btn btn-light btn-sm">1</button>
                    <button className="btn btn-light btn-sm">2</button>
                    <button className="btn btn-light btn-sm">3</button>
                </div>
                <div className="keypad-row">
                    <button className="btn btn-light btn-sm">4</button>
                    <button className="btn btn-light btn-sm">5</button>
                    <button className="btn btn-light btn-sm">6</button>
                </div>
                <div className="keypad-row">
                    <button className="btn btn-light btn-sm">7</button>
                    <button className="btn btn-light btn-sm">8</button>
                    <button className="btn btn-light btn-sm">9</button>
                </div>
                <div className="keypad-row">
                    <button className="btn btn-light btn-sm">
                        <i className="fa fa-close"></i>
                    </button>
                    <button className="btn btn-light btn-sm">0</button>
                    <button className="btn btn-light btn-sm">&nbsp;</button>
                </div>
            </div>
        }
    </div>
)  

export default Keypad;