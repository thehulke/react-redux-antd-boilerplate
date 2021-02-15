import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Routes } from '../common/consts/Routes'
import Home from './Home'

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.ROOT}>
          <Home/>
        </Route>

        <Route path={'*'}>
          <div>PAGE NOT FOUND</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRoutes
