import React, { Component } from 'react'
import Form from '../components/Form'
export default class TodoList extends Component {
    constructor(){
        super()
        this.state= {
            newTodo: "",
            todoList: []
        }
    }

    handleChange= (event) =>{
        console.log(event.target.value)
        this.setState({newTodo: event.target.value })
    }
    

    handleSubmit= async () =>{
        try{
            //axios call 
            let response 
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
            <button>Submit</button>
        </form>
    </div>
    )
}
}
