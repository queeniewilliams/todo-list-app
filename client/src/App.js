import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'

export default class App extends Component {
  render (){
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/todolist" component={TodoList} />
          </Switch>
        </main>
      </div>
    )
  }
}

