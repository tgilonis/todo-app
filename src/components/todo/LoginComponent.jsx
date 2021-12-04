import React, {Component} from 'react';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'DefaultValue',
            password: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    render() { 
        return (
            <div>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange = {this.handlePasswordChange}/>
            <button>Login</button>
            </div>
        )
    }

    handleUserNameChange(event) {
        // controlled component - the input's value is always driven by the React state
        // advantage of this is the ability to pass the value to other UI elements
        this.setState({username : event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password : event.target.value})
    }
}

export default LoginComponent;