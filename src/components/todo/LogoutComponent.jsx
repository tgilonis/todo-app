import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our application.
                </div>
            </div>
        )
    }
}

export default withRouter(LogoutComponent)