import React, { Component } from 'react'
import * as axios from 'axios'

class Square extends Component {
  render = () => {
    return (
      <div className="container">
        <img className="img" src={this.props.source} />
        <p className="text">{this.props.number}</p>
        <h2>{this.props.name}</h2>
        <img src="https://octodex.github.com//images/Fintechtocat.png" />
      </div>
    )
  }
}

export default Square
