import React from 'react';
import {iconFor, imageFor, nameFor} from '../../ui/simbology.js'

export default class PlayerScore extends React.Component {
  pointsLabel(content, key) {
    const value = content.props[key] || 0;
    return (
      <div className={`score ${value === 0 ? 'note' : ''}`}>
        <span className="value">{value}</span>
        <i className={`icon ${iconFor(key)} symbol`} />
        <br />
        <span className="titlePlayer">{nameFor(key)}</span>
      </div>
    );
  }

  render() {
    console.debug('RENDER', this);
    return (
      <li>
        <div className="player">
          <img
            className="avatar"
            src={imageFor(this.props.name)}
          />
          <span className="name">
            {this.props.name[0].toUpperCase() + this.props.name.slice(1)}
          </span>
        </div>
        {this.pointsLabel(this, 'balance')}
        {this.pointsLabel(this, 'coffee')}
        {this.pointsLabel(this, 'bread')}
        {this.pointsLabel(this, 'mess')}
        {this.pointsLabel(this, 'joke')}
        {this.pointsLabel(this, 'total')}
      </li>
    );
  }
}

PlayerScore.propTypes = {
  name: React.PropTypes.string,
  total: React.PropTypes.number,
};
