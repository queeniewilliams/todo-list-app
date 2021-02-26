import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'
import LogIn from './pages/LogIn'
import Modal from 'react-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
              afterOpenModal={this.afterOpenModal}
              closeModal={this.closeModal}
            />
            <Route path="/login" component={LogIn} />
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
