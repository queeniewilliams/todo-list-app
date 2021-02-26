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

  addItem = (e) => {
    e.preventDefault()
    const newArray = this.state.todoListArray
    newArray.push(this.state.newItem)
    this.setState({ newItem: '', todoListArray: newArray })
  }
  clearlist(e) {
    this.setState({
      newArray: []
    })
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
    let todoItems = this.props.thelist.map((item, index) => (
      <listItem doThis={item} key={'todo' + index} />
    ))
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
          <button onClick={(e) => this.additem(e)}>Add item!</button>
          <input type="submit" value="submit" />
        </form>
        <button onClick={(e) => this.clearlist(e)}>Clear list!</button>
      </div>
    )
  }
}
