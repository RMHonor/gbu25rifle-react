import React from 'react';

import FlagImg from '../../../assets/images/flag.jpg';
import './banner.scss';

export default (props) => (
  <div className="banner">
    <h1 className="banner__heading">
      Great Britain<br/>
      Under 25<br/>
      Rifle Team
    </h1>
    {/* <div className="banner__image">
      <img src={FlagImg} alt="Union Flag"/>
    </div> */}
  </div>
);
