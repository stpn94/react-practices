import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            showClock: true
        }
    }

    hideClock(){
        this.setState({
            showClock: false
        });
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                {
                    this.state.showClock ?     
                        <Clock callback={ this.hideClock.bind(this) }/> :
                        null
                }
            </div>
        );
    }
}