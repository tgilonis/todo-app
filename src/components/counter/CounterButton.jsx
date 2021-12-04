import React, { Component } from 'react';
import './CounterButton.css';
import PropTypes from 'prop-types'

class CounterButton extends Component {

    constructor() {
        super();        
    };

    render () {        
        return (
            <div className="counter">   
            {/* incrementMethod is passed as a property from the parent - Counter*/}             
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    };    

 
};

CounterButton.defaultProps = {
    by : 1
};

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton;
