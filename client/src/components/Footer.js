import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    const { name, email, handleChange } = this.props
    return (
      <footer className="footer">
        <div>
          <ul>
            <li>
              <NavLink
                to="/signup"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                SIGN UP
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                LOG IN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todolist"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                TO-DO LIST
              </NavLink>
            </li>
            <li>
              <NavLink to="" style={{ textDecoration: 'none', color: 'white' }}>
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <form className="contact">
            <h4>GET IN TOUCH</h4>
            NAME:
            <br></br>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <br></br>
            <br></br>
            EMAIL:
            <br></br>
            <input type="text" value={email} onChange={handleChange} />
            <br></br>
            <br></br>
            MESSAGE:
            <br></br>
            <input
              type="text"
              name="message"
              value={email}
              onChange={handleChange}
              style={{ padding: '100px' }}
            />
            <br></br>
            <br></br>
            <button className="submit">SUBMIT</button>
          </form>
        </div>
      </footer>
    )
  }
}
