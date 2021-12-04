import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types'
import CounterButton from './CounterButton'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        };
        
        this.increment = this.increment.bind(this);
    };

    increment(by) {
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + by}
                }
            );        
    };

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
            <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
            <CounterButton by={10} incrementMethod={this.increment}></CounterButton>            
            <span className="count">{this.state.counter}</span>        
          </div>
          
        );
      }
}

export default Counter;
