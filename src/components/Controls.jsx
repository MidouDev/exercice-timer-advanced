import React from 'react';
import '../styles/Controls.css';

const Controls = (props) => (
    <div>
        {
            props.status === null ?
            <div className="controls">
                <button className="btn btn-success btn-lg btn-block" 
                        onClick={props.onStart}
                        disabled={!props.canStart} >
                    START
                </button>
            </div>
            :
            <div className="controls">
                {
                    props.status === 'STOPPED'?
                    <button className="btn btn-success btn-lg" onClick={props.onResume} >
                        RESUME
                    </button>
                    :
                    <button className="btn btn-danger btn-lg" onClick={props.onStop} >
                        STOP
                    </button>
                }
                
                <button className="btn btn-primary btn-lg" onClick={props.onReset} >
                    RESET
                </button>
            </div>
        }
        
    </div>
)

export default Controls;