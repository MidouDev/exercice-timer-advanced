import React,{Component} from 'react';
import Display from './Display';
import '../styles/Timer.css';
import Keypad from './Keypad';
import Controls from './Controls';

class Timer extends Component {
    static initialState = () => ({
        status: null,
        hours: '00',
        minutes: '00',
        seconds: '00',
        timeUnit: null,
        currentTime: null,
        canStart: null
    })

    state = Timer.initialState();

    handleKeyPadClick = (val) => {
        if(this.state.timeUnit==='HH'){
            this.setHours(val);
        }
        if(this.state.timeUnit==='MM'){
            this.setMinutes(val);
        }
        if(this.state.timeUnit==='SS'){
            this.setSeconds(val);
        }

        this.canStart();
    }

    handleFocusChange =(val) => {
        this.setState(() => ({timeUnit: val}))
    }

    setHours(hour){

        if(hour<0){

            this.setState({hours: '00'});

        }else{
            this.setState((prevState)=>{
                hour = parseInt(this.formatTime(prevState.hours + hour));

                if(hour>99){
                    hour = prevState.hours;
                }
                return({ hours: this.formatTime(hour) })
            })
        }
    }

    setMinutes(minute){
        if(minute<0){

            this.setState({minutes: '00'});

        }else{
            this.setState((prevState) => {
                minute = parseInt(this.formatTime(prevState.minutes + minute));

                if(minute<60){
                    
                }else if(minute>59){
                    minute = parseInt(minute.toString().slice(minute.toString().length -1));
                }

                return ({minutes: this.formatTime(minute)});
            })
        }
    }

    setSeconds(second){
        if(second<0){

            this.setState({seconds: '00'});

        }else{
            this.setState((prevState) => {
                second = parseInt(this.formatTime(prevState.seconds + second));

                if(second<60){
                    
                }else if(second>59){
                    second = parseInt(second.toString().slice(second.toString().length -1));
                }

                return ({seconds: this.formatTime(second)});
            })
        }
    }

    canStart = () => {
        this.setState((prevState) => ({ canStart : prevState.status 
            !== 'STARTED' && (parseInt(prevState.hours) > 0
                             || parseInt(prevState.minutes) > 0
                             || parseInt(prevState.seconds) > 0) }))
    }

    handleStart = () => {
        this.startTimer();
    }

    startTimer = () => {
        this.setState({status: 'STARTED'});

        const timeMilli = (parseInt(this.state.hours)*60*60 + 
                           parseInt(this.state.minutes)*60 +
                           parseInt(this.state.seconds))*1000;
        
        this.setState({ currentTime: parseInt(timeMilli)})
        
        this.interval = setInterval(() => {

            this.setState((prevState) => ({
                currentTime: prevState.currentTime -10
            }))

            if(this.state.currentTime === 0){
                clearInterval(this.interval);
                this.setState({ status : null})
            }
        },10)
    }

    handleResume = () => {
        this.interval = setInterval(() => {

            this.setState((prevState) => ({
                status: 'STARTED',
                currentTime: prevState.currentTime -10
            }))

            if(this.state.currentTime === 0){
                clearInterval(this.interval);
                this.setState({ status : null})
            }
        },10)
    }

    handleStop = () => {
        clearInterval(this.interval);
        this.setState({ status: 'STOPPED'});
    }

    handleReset = () => {
        this.setState({ status: null});
        clearInterval(this.interval);
    }

    formatTime(time) {
        time = parseInt(time);
        return time < 10 ? '0' + time : time.toString().slice(time.toString().length - 2);
    }

    render(){
        return(
            <div className="d-flex flex-row">
                <div className="timer">
                    <Display 
                        status={this.state.status}
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        currentTime={this.state.currentTime}
                        onFocusChange={this.handleFocusChange} 
                    />
                    <Keypad 
                        status={this.state.status}
                        onClick={this.handleKeyPadClick} 
                    />
                    <Controls 
                        status={this.state.status}
                        canStart={this.state.canStart}
                        onStart={this.handleStart}
                        onResume={this.handleResume}
                        onStop={this.handleStop}
                        onReset={this.handleReset}
                    />
                </div>  
            </div>
        )
    }
}

export default Timer;