import React, { Component } from 'react'

class ButtonIncrement extends Component { 
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }

  render () {
    return (<button onClick={this.handleClick}>
      +{this.props.incrementValue}
    </button>)
  }
}

export default ButtonIncrement
