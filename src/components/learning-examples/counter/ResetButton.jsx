import React, { Component } from 'react';
import './CounterButton.css';
import PropTypes from 'prop-types'

class ResetButton extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        };

        this.reset = this.reset.bind(this);
    };

    render() {
        return ( 
            <div className="reset">
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    };

    reset() {
        this.setState({
            counter : 0
        });

        this.props.resetMethod();
    }
}

export default ResetButton;