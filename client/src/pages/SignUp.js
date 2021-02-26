import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'
import Modal from 'react-modal'

export default class SignUp extends Component {
  render() {
    const {
      name,
      email,
      handleChange,
      currentPage,
      incrementPage,
      decrementPage
    } = this.props
    return (
      <div>
        <img
          className="signupbg"
          src="https://i.ibb.co/b3BgwVt/Screen-Shot-2021-02-25-at-10-54-32-PM.png"
          width="100%"
        />
        <div className="signupform">
          <UserInfo
            currentPage={currentPage}
            handleChange={handleChange}
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            name={name}
            email={email}
          />
        </div>
      </div>
    )
  }
}
