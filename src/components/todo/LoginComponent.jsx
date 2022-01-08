import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'DefaultValue',
            password: '',
            hasLoginFailed: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        
    }

    render() { 
        return (
            <div>
                <h1>Login</h1>               
                    <div className="countainer">
                        {/*JSX evaluates the first condition - if true returns the second part of the expression*/}
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                        {this.state.showSuccessMessage && <div>Successful login</div>}
                        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        Password: <input type="password" name="password" value={this.state.password} onChange = {this.handleChange}/>
                        <button className="btn btn=success" onClick={this.loginClicked}>Login</button>
                    </div>
            </div>
        )
    }

    
    loginClicked(event) {        
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)           
        //             this.props.history.push(`/welcome/${this.state.username}`)
        //         }).catch(() => {
        //             this.setState({showSuccessMessage: false})
        //             this.setState({hasLoginFailed: true})
        //         })
    }

    handleChange(event) {
        // controlled component - the input's value is always driven by the React state
        // advantage of this is the ability to pass the value to other UI elements
        this.setState(
            {
                // now event.target.name is the name field - this must match the name of the state field
                [event.target.name] : event.target.value
            }
        )
    }

    
}

export default withRouter(LoginComponent);