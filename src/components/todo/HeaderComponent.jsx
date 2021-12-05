import React, {Component} from 'react'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/login" className="navbar-brand">Todos</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Todos</li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link">Login</li>
                        <li className="nav-link">Logout</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent