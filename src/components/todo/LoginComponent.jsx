import React, {Component} from 'react';

class LoginComponent extends Component {
    render() { 
        return (
            <div>
            User Name: <input type="text" name="username"/>
            Password: <input type="password" name="password"/>
            <button>Login</button>
            </div>
        )
    }
}

export default LoginComponent;