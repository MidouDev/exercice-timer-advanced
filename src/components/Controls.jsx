import React from 'react';
import '../styles/Controls.css';

const Controls = (props) => (
    <div>
        {
            props.status === null ?
            <div className="controls">
                <button className="btn btn-success btn-lg btn-block">
                    START
                </button>
            </div>
            :
            <div className="controls">
                {
                    props.status === 'STOPPED'?
                    <button className="btn btn-success btn-lg btn-block">
                        RESUME
                    </button>
                    :
                    <button className="btn btn-danger btn-lg btn-block">
                        STOP
                    </button>
                }
                
                <button className="btn btn-primary btn-lg">
                    RESET
                </button>
            </div>
        }
        
    </div>
)

export default Controls;