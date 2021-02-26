import React, { Component } from 'react'
import Form from '../components/Form'
import axios from "axios"

export default class TodoList extends Component {
    constructor(){
        super()
        this.state= {
            newTodo: "",
            todoList: [],
            deadline: ""
        }
    }

    componentDidMount() {
        this.getAllTodos()
    }

    getAllTodos = async () => {
        try{
        console.log('get all todos firing')
        const response = await axios.get('http://localhost:3001/api/todos')
        console.log(response)
        } catch (error) {
         console.log('error')
        }
    }

    handleChange= (event) =>{
        console.log(event.target.value)
        this.setState({newTodo: event.target.value })
    }

    handleDeadline= (e) => {
        this.setState({deadline: e.target.value})
    }
    

    handleSubmit= async () =>{
        try{
            console.log('submitted firing off')
            //axios call 
            let response = await axios.post('http://localhost:3001/api/todos')
            console.log(response)
        } catch (error){
            console.log(error)
        }
    } 


render() {
    console.log(this.state.newTodo)
    return( 
        <div> 
        <h1>todolist</h1>
        <form onSubmit= {this.handleSubmit}>
            <input
            type="text"
            name="todo"
            placeholder="add todo here"
            value={this.state.newTodo}
            onChange={this.handleChange}
            />
            <input 
            type="text"
            name="deadline"
            placeholder="deadline"
            value={this.state.deadline}
            onChange={this.handleDeadline}
            />
            <input type="submit" value="submit"/>
        </form>
    </div>
    )
}
}
