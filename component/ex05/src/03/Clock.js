import React, { Component } from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hours: '00',
            minutes: '00',
            seconds: '00',
            session: 'am'
        }

        this.count = 0;
    }

    componentDidMount(){
        this.interval = setInterval(function() {
            if(++this.count == 10) {
                this.props.callback();
            }
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            this.setState({
                hours: `0${hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}`.slice(-2),
                minutes: `0${minutes}`.slice(-2),
                seconds: `0${seconds}`.slice(-2),
                session: hours > 12 ? 'pm' : 'am'       
            });
        }.bind(this), 1000);
    }

    render() {
        return (
            <div className="Clock">
                <div className="numbers">
                    <p>{ this.state.hours }</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{ this.state.minutes }</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{ this.state.seconds }</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        <p className={ this.state.session === 'am' ? 'on' : 'off' }>am</p>
                    </div>
                    <div>
                        <p className={ this.state.session === 'pm' ? 'on' : 'off' }>pm</p>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount(){
        //clean-up
        console.log('Click', 'componentWillUnmount() called');
        clearInterval(this.interval);
    }

}