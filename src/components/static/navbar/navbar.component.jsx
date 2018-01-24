import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../../routes';

import './navbar.scss';

export default () => (
  <nav>
    <ul className="navbar">
      {routes.map(route => (
        <li key={route.path}>
          <NavLink to={route.path} className="navbar__link" activeClassName="navbar__link--active">
            {route.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
