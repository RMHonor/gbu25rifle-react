import React, { Component } from 'react';

// TODO replace
import placeholder from '../../assets/images/placeholder-square.png';

import './home.scss';

export default class Home extends Component {
  render() {
    return (
      <section className="grid home">

        <div className="intro content-block">
          <img src={placeholder} />
          <h2>Captain's Introduction</h2>
          <p>kfhgjsh sdjhgkdsfhgkjdfh jkhakhfglkash ksjhgkshg kajshgklajsh askjgh kljgh akjhgkljsgh</p>
        </div>

        <div className="quick-updates content-block">
          <h2>Quick Updates</h2>
          <p>gkjdhg dksjhgkdfg lkjdfhglkdsjhg lskdjfhgldksjfhg lkjsdhfglkdjfh lskjdfhgkldjfh lkjsdhfglkdhg</p>
        </div>

        <div className="sponsorship content-block">
          <img width="100%" src={placeholder} />
        </div>

        <div className="facebook content-block">
        </div>
      </section>
    );
  }
}
