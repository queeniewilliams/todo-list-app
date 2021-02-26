import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class UserInfo extends Component {
  render() {
    const {
      name,
      email,
      handleChange
      // incrementPage,
      // decrementPage
    } = this.props

    return (
      <div className="info">
        <h1>Sign Up</h1>
        <br></br>
        <br></br>
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
          <br></br>
          <br></br>
          <NavLink
            to="/todolist"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <button className="signupBtn2">SIGN UP</button>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <button className="closeBtn">Close</button>
          </NavLink>
        </form>
      </div>
    )
  }
}
