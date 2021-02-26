import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import UserInfo from '../components/UserInfo'
import Footer from '../components/Footer'

export default class Home extends Component {
  render() {
    const { name, email, handleChange } = this.props

    return (
      <div>
        <header>
          <img
            className="logo"
            src="https://i.ibb.co/xS8bjGj/slacker.png"
            width="100px"
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

          <img
            className="img1"
            src="https://i.ibb.co/R6SFXKm/Ik7-FGk1-GZp-ER-ACVndfxc-Az-Pt-1-446166s-1.jpg"
            width="650px"
            height="600px"
          />
          <section className="section2">
            <h3>Prioritize your work</h3>
            <p>
              From major milestones to the tiniest tasks, manage all your tasks
              in Teamwork so you can plan and prioritize work. Assign owners,
              due dates and estimated time – so everyone knows what to tackle
              and when.
            </p>
          </section>
          <section className="section3">
            <h3>Collaborate effectively</h3>
            <p>
              Work together with context, transparency, and accountability. With
              increased visibility and improved communication, you can keep
              collaboration at the core of everything you do.
            </p>
          </section>
          <img
            className="img2"
            src="https://www.innovationtraining.org/wp-content/uploads/2020/03/Remote-Working-Software-Tools-600x300.jpeg"
            width="600px"
          />
          <img
            className="img3"
            src="https://www.aira.net/2015/wp-content/uploads/2019/08/how-to-visualise-data-digital-pr.png"
            width="600px"
          />
          <section className="section4">
            <h3>Visualise your tasks</h3>
            <p>
              Get at-a-glance overviews of where your work stands with
              Boardview. Move tasks through stages to track progress and spot
              bottlenecks easily.
            </p>
          </section>
        </main>
        <Footer name={name} email={email} />
      </div>
    )
  }
}
