import React from 'react';
import '../styles/Display.css';

const Display = (props) => (
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
                        value="00"
                        maxLength={2}
                    />
                    <span className="display-input input-sep">:</span>
                    <input 
                        type="text"
                        className="form-control display-input disp-minutes"
                        placeholder="00"
                        value="00"
                        maxLength={2}
                    />
                    <span className="display-input input-sep">:</span>
                    <input 
                        type="text"
                        className="form-control display-input disp-seconds"
                        placeholder="00"
                        value="00"
                        maxLength={2}
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
                    00:00:00:00
                </div>
            </div>
        }
    </div>
)

export default Display;