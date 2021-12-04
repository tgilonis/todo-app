import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    };

    increment(by) {
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + by}
                }
            );        
    };

    decrement(by) {
      this.setState(
          (prevState) => {
          return {counter : prevState.counter - by}
              }
          );        
    };

    reset() {
      this.setState(
          (prevState) => {
          return {counter : 0}
              }
          );        
    };

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>            
            <ResetButton resetMethod={this.reset}/>
            <span className="count">{this.state.counter}</span>        
          </div>
          
        );
      }
}

export default Counter;
