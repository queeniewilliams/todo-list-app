import React, { Component } from 'react'
import axios from 'axios'
import ListItem from '../components/ListItem'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../globals'

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
      const response = await axios.get(`${BASE_URL}/api/todos`)
    } catch (error) {
      console.log('error')
    }
  }

  clearlist(e) {
    this.setState({
      todoList: []
    })
  }

  handleChange = (event) => {
    this.setState({ listItem: event.target.value })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post(`${BASE_URL}/api/todos/add`, {
        listItem: this.state.listItem,
        deadline: this.state.deadline
      })
      const newArray = this.state.todoList
      newArray.push({
        listItem: this.state.listItem,
        deadline: this.state.deadline
      })
      this.setState({ listItem: '', deadline: '', todoList: newArray })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  handleDeadline = (e) => {
    this.setState({ deadline: e.target.value })
  }

  render() {
    const { name, email, handleChange } = this.props
    return (
      <div className="todomain">
        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <img
            className="logo"
            src="https://i.ibb.co/xS8bjGj/slacker.png"
            width="100px"
          />
        </NavLink>
        <h1 className="todoTitle">Project Planning</h1>
        <form onSubmit={this.handleSubmit} className="todoform">
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
          <input
            type="submit"
            value="submit"
            style={{ backgroundColor: 'orange' }}
          />
        </form>
        <button className="clear" onClick={(e) => this.clearlist(e)}>
          Clear list!
        </button>
        <div className="container">
          {this.state.todoList.map((item, index) => (
            <ListItem
              doThis={item.listItem}
              deadline={item.deadline}
              key={'todo' + index}
            />
          ))}
        </div>
      </div>
    )
  }
}
