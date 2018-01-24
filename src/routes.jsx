import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from './containers/home/home.component';
import Team from './containers/team/team.component';

export const routes = [
  {
    path: '/home',
    text: 'Home',
    component: Home,
  },
  {
    path: '/team',
    text: 'Team',
    component: Team,
  },
];

export default ({ children }) => (
  <Router>
    <div>
      {children}
      {routes.map(route => (
        <Route exact={route.exact} path={route.path} component={route.component} key={route.path} />
      ))}
      <Route exact path="/" render={() => <Redirect to={routes[0].path} />} />
    </div>
  </Router>
);
