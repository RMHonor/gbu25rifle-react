import React from 'react';
import { render } from 'react-dom';

import Banner from './components/static/banner/banner.component';
import NavBar from './components/static/navbar/navbar.component';

import Router from './routes';

render(
  <div>
    <Banner heading="Great Britain\nUnder 25\nRifle Team" />
    <Router>
      <NavBar />
    </Router>
  </div>,
  document.querySelector('#app'),
);
