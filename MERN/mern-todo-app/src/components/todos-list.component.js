import React, {Component} from 'react'
import {Link}  from 'react-router-dom'
import axios from  'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td> <Link to={"/edit/"+props.todo_id}> Edit </Link></td>
    </tr>
)

export default class TodosList extends Component {
    constructor(props){
        super(props)
        this.state = {todos: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos')
        .then(res => {
            this.setState({todos: res.data})
        })
        .catch(function(err){
            console.log(err)
        })
    }

    todosList(){
        return this.state.todos.map(function(currrentTodo, i){
            return <Todo todo={currrentTodo} key={i} />
        })
    }

    render () {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-stripped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th> Description </th>
                            <th> Responsible </th>
                            <th> Priority </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todosList() }
                    </tbody>
                </table>
            </div>
        )
    }
}