import React, { Component } from 'react'
export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
    } catch (error) {
      console.log(error)
    }
  }

  render() {
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
        </form>
      </div>
    )
  }
}
