import React, {Component} from 'react';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'DefaultValue',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    render() { 
        return (
            <div>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange = {this.handleChange}/>
            <button>Login</button>
            </div>
        )
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

export default LoginComponent;