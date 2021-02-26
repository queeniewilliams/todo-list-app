import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <div>
        <div className="todolist">
          <h6>{this.props.doThis} </h6>
          <h6 className="date">{this.props.deadline}</h6>
        </div>
      </div>
    )
  }
}
