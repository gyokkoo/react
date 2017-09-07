import React, { Component } from 'react'
import FormHelpers from '../common/FormHelpers'
import LoginForm from './LoginForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin)
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserLogin (data) {
    console.log(data)
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()
    // TODO: validate the form

    userActions.login(this.state.user)
  }

  render () {
    return (
      <div>
        <h1>Login Into Your Account</h1>
        <LoginForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default LoginPage
