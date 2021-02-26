import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignUp extends Component {
  render() {
    const { email, password, handleChange, currentPage } = this.props
    return (
      <div>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <img
            className="logo"
            src="https://i.ibb.co/1X3GL9M/slacker-Logo-1.png"
            width="250px"
            height="250px"
          />
        </NavLink>
        <h1>Sign In</h1>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            password="password"
            placeholder="Type Your Password"
            value={password}
            onChange={handleChange}
          />
        </form>
        <br></br>
        <div>
          <NavLink
            to="/todolist"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            SIGN IN
          </NavLink>
        </div>
      </div>
    )
  }
}
