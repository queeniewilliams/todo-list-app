import React, { Component } from 'react';
import Form from '../components/Form'

export default class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            todoList: [],
            inputText: "a"
        }
    }
    //get user todo 
    //Map through all the todo we get 
    //user type text in form to create a todo function that will use axios to work with the backend 




    render(){
        return (
            <div className="list">
                <Form inputText={this.state.inputText}/>
            </div>
        )
    }
}
