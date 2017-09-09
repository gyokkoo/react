import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ListPetsPage from '../../pets/ListPetsPage'
import LoginPage from '../../users/LoginPage'
import RegisterPage from '../../users/RegisterPage'
import LogoutPage from '../../users/LogoutPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListPetsPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/users/register' component={RegisterPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
  </Switch>
)

export default Routes
