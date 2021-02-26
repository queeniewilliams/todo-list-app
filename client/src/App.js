import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'
import LogIn from './pages/LogIn'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      name: '',
      email: ''
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              openModal={this.openModal}
              closeModal={this.closeModal}
            />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/todolist"
              component={TodoList}
              onChange={this.handleChange}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
