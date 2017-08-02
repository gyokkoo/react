import React, { Component } from 'react'

class Button extends Component { 
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }

  render () {
    return (<button onClick={this.handleClick}>
      +{this.props.incrementValue}
    </button>)
  }
}

export default Button
