import React, { Component } from 'react';
import Modal from 'react-modal';

import './member-tile.scss';

export default class MemberTile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { member: { image, name, position, about } } = this.props;

    return (
      <div onClick={this.toggle} className="member-tile content-block">
        <img width="100%" src={image} alt={name} />
        <h2 className="member-tile__name">{name}</h2>
        <h3 className="member-tile__position">{position}</h3>
        <Modal
          isOpen={this.state.isOpen}
          appElement={document.querySelector('#app')}
          onRequestClose={this.toggle}
          className="member-modal"
        >
          <img src={image} alt={name} className="member-modal__image"/>
          <h2 className="member-modal__name">{name}</h2>
          <h3 className="member-modal__position">{position}</h3>
          <p className="member-modal__about">{about}</p>
          <button onClick={this.toggle} type="button">Close</button>
        </Modal>
      </div>
    );
  }
}
