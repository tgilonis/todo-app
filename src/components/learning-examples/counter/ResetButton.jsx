import React, { Component } from 'react';
import './CounterButton.css';
import PropTypes from 'prop-types'

class ResetButton extends Component {

    constructor() {
        super();
        
    };

    render() {
        return ( 
            <div className="reset">
                {/*resetMethod must be called on click - resetMethod() */}
                <button onClick={() => this.props.resetMethod()}>Reset</button>
            </div>
        );
    };
}

export default ResetButton;