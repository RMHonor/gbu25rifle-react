import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routes';

import './navbar.scss';

export default () => (
  <nav className='navbar'>
    <ul>
      {routes.map(route => (
        <li key={route.path}>
          <Link to={route.path}>
            {route.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
