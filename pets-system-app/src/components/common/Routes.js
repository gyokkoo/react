import React from 'react'
import ListPetsPage from '../pets/ListPetsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import { Switch, Route } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListPetsPage} />
    <LoginPage path='/users/login' component={LoginPage} />
    <RegisterPage path='/users/register' component={RegisterPage} />
  </Switch>
)

export default Routes
