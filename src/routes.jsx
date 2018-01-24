import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from './containers/home/home.component';
import Team from './containers/team/team.component';
import News from './containers/news/news.component';
import History from './containers/history/history.component';

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
  {
    path: '/news',
    text: 'News',
    component: News,
  },
  {
    path: '/history',
    text: 'History',
    component: History,
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
