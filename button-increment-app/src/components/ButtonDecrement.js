import React, { Component } from 'react'

class ButtonDecrement extends Component { 
  handleClick = () => {
    this.props.onClickFunction(this.props.decrementValue)
  }

  render () {
    return (<button onClick={this.handleClick}>
      -{this.props.decrementValue}
    </button>)
  }
}

export default ButtonDecrement
