import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'
import LogIn from './pages/LogIn'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      show: false
    }
  }
  openModal() {
    console.log('show')
    this.setState({ show: true })
  }

  closeModal() {
    this.setState({ show: false })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/user?email=${this.state.email}&password=${this.state.password}`
      )
    } catch {
      console.log('error')
    }
  }

  // incrementPage = () => {
  //   this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
  // }
  // decrementPage = () => {
  //   this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }))
  // }

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
            <Route path="/login" component={LogIn} login={this.login} />
            <Route
              path="/signup"
              component={SignUp}
              // incrementPage={this.incrementPage}
              // decrementPage={this.decrementPage}
            />
            <Route path="/todolist" component={TodoList} />
          </Switch>
        </main>
      </div>
    )
  }
}
