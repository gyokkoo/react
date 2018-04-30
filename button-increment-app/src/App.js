import React, { Component } from 'react'
import ButtonIncrement from './components/ButtonIncrement'
import ButtonDecrement from './components/ButtonDecrement'

import Result from './components/Result'

class App extends Component {
  state = { counter: 0 }

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }))
  }

  decrementCounter = (decrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter - decrementValue
    }))
  }

  render() {
    return (
      <div>
        <ButtonIncrement incrementValue={1} onClickFunction={this.incrementCounter}/>
        <ButtonIncrement incrementValue={5} onClickFunction={this.incrementCounter}/>
        <ButtonIncrement incrementValue={10} onClickFunction={this.incrementCounter}/>
        <ButtonIncrement incrementValue={100} onClickFunction={this.incrementCounter}/>  
        <br />      
        <ButtonDecrement decrementValue={1} onClickFunction={this.decrementCounter}/>
        <ButtonDecrement decrementValue={5} onClickFunction={this.decrementCounter}/>
        <ButtonDecrement decrementValue={10} onClickFunction={this.decrementCounter}/>
        <ButtonDecrement decrementValue={100} onClickFunction={this.decrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    )
  }
}

export default App
