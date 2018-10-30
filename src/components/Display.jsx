import React from 'react';
import '../styles/Display.css';
import Time from '../lib/Time.js';

const Display = (props) => {
    var time = new Time();
    return(
        <div>
            {
                props.status === null &&
                <div className="display">
                    <div>
                        <label type="text" className="display-label">H</label>
                        <label type="text" className="display-label">M</label>
                        <label type="text" className="display-label">S</label>
                    </div>
                    <div className="input-group input-group-lg display-input-group">
                        <input 
                            type="text"
                            className="form-control display-input disp-hours"
                            placeholder="00"
                            value={props.hours}
                            maxLength={2}
                            onFocus={() => props.onFocusChange('HH')}
                            //onChange={props.onInputChange}
                        />
                        <span className="display-input input-sep">:</span>
                        <input 
                            type="text"
                            className="form-control display-input disp-minutes"
                            placeholder="00"
                            value={props.minutes}
                            maxLength={2}
                            onFocus={()=> props.onFocusChange('MM')}
                            onChange={props.onInputChange}
                        />
                        <span className="display-input input-sep">:</span>
                        <input 
                            type="text"
                            className="form-control display-input disp-seconds"
                            placeholder="00"
                            value={props.seconds}
                            maxLength={2}
                            onFocus={()=> props.onFocusChange('SS')}
                            onChange={props.onInputChange}
                        />
                    </div>
                </div>
            }
            {
                props.status !== null &&
                <div className="display-countdown">
                    <div>
                        <label type="text" className="display-label-countdown">H</label>
                        <label type="text" className="display-label-countdown">M</label>
                        <label type="text" className="display-label-countdown">S</label>
                        <label type="text" className="display-label-countdown">CS</label>
                    </div>
                    <div className="display-countdown-time">
                        {time.getTimeDisplay(props.currentTime)}
                    </div>
                </div>
            }
        </div>
    )
}

export default Display;