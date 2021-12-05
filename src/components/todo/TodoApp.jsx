import React, { Component } from 'react';
import LoginComponent from './LoginComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';


class TodoApp extends Component {
    render () {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome" component={WelcomeComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp;