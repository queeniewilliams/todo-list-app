import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import UserInfo from '../components/UserInfo'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <img
            className="logo"
            src="https://i.ibb.co/1X3GL9M/slacker-Logo-1.png"
            width="250px"
            height="250px"
          />
          <NavLink
            className="signupBtn"
            to="/signup"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            TRY FOR FREE
          </NavLink>

          <NavLink
            className="loginBtn"
            to="/login"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            LOG IN
          </NavLink>
        </header>
        <main>
          <section className="section1">
            <h2>
              Making
              <br></br>
              Remote
              <br></br>
              Firm Management
              <br></br>
              Easier
            </h2>
            <img
              className="mainimg"
              src="https://images.ctfassets.net/lzny33ho1g45/4dBmz2qbCdUEQ8Z5Zr2jQH/86ea25e7ba44580d252b092f8a68dbd4/kanban"
              width="850px"
              height="650px"
            />
            <NavLink
              className="todoBtn"
              to="/todolist"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              CREATE YOUR TO-DO-LIST
            </NavLink>
          </section>
          <section className="section2">
            <img
              className="img1"
              src="https://poster-images.ustudio.com/Ik7FGk1GZpER-ACVndfxcAzPt-1.446166s.jpg"
              width="1000px"
              height="700px"
            />
          </section>
        </main>
      </div>
    )
  }
}
