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
        <UserInfo
          currentPage={currentPage}
          handleChange={handleChange}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          name={name}
          email={email}
        />
      </div>
    )
  }
}
