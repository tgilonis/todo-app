import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            todos : 
            [
                // {id: 1, description : 'Learn to Dance', isDone:false, targetDate: new Date()},
                // {id: 2, description : 'Learn React', isDone:false, targetDate: new Date()},
                // {id: 3, description : 'Visit India', isDone:false, targetDate: new Date()}
            ]
        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(response =>  {
            console.log(response.data)
            this.setState({todos : response.data})
        })

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                    <div className="container">           

                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr key={todo.id}>                                        
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate}</td>
                                    </tr>
                                )                        
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent