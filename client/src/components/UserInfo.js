import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class UserInfo extends Component {
  render() {
    const {
      name,
      email,
      handleChange,
      incrementPage,
      decrementPage
    } = this.props

    return (
      <div className="info">
        <header>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
            HOME
          </NavLink>
        </header>
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
          />
        </form>
        <br></br>
        <div>
          <NavLink
            to="/todolist"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            SIGN UP
          </NavLink>
        </div>
      </div>
    )
  }
}
