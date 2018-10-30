import React,{Component} from 'react';
import Display from './Display';
import '../styles/Timer.css';
import Keypad from './Keypad';
import Controls from './Controls';

class Timer extends Component {
    static initialState = () => ({
        status: 'STOPPED',
    })

    state = Timer.initialState();

    render(){
        return(
            <div className="d-flex flex-row">
                <div className="timer">
                    <Display status={this.state.status} />
                    <Keypad status={this.state.status} />
                    <Controls status={this.state.status} />
                </div>  
            </div>
        )
    }
}

export default Timer;