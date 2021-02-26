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
        <Modal show={true}>
          <Modal.Dialog>
            {/* <header>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
              HOME
            </NavLink>
          </header>
          <h1>Sign Up</h1> */}
            <Modal.Header closeButton>
              <Modal.Title>SIGN UP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Sign up</Button>
            </Modal.Footer>
            {/* <br></br>
          <div>
            <NavLink
              to="/todolist"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              SIGN UP
            </NavLink>
          </div> */}
          </Modal.Dialog>
        </Modal>
      </div>
    )
  }
}
