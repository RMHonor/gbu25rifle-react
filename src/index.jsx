import React from 'react';
import { render } from 'react-dom';

import Banner from './components/static/banner/banner.component';

render(
  <Banner heading="Great Britain\nUnder 25\nRifle Team"/>,
  document.querySelector('#app'),
);
