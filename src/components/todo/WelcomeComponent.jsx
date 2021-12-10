import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state = {
            welcomeMessage : ''
        }
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcom message.
                    <button onClick={this.retrieveWelcomeMessage} 
                    className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }
    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(console.log("Failure"))

        HelloWorldService.executeHelloWorldBeanPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        //.then(response => console.log(response.data.message))
        .catch(console.log("Failure"))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(console.log("Failure"))
    }

    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage : response.data.message})
    }
}

export default WelcomeComponent