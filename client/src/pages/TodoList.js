import React, { Component } from 'react'
import axios from 'axios'
export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      listItem: '',
      todoList: [],
      deadline: ''
    }
  }
  getAllTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/todos')
      console.log(response)
    } catch (error) {
      console.log('error')
    }
  }
  handleChange = (event) => {
    this.setState({ listItem: event.target.value })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('submitted firing off')
      //axios call
      let response = await axios.post('http://localhost:3001/api/todos/add', {
        listItem: this.state.listItem
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    console.log(this.state.listItem)
    return (
      <div>
        <h1>todolist</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="listItem"
            placeholder="add todo here"
            value={this.state.listItem}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="deadline"
            placeholder="deadline"
            value={this.state.deadline}
            onChange={this.handleDeadline}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
