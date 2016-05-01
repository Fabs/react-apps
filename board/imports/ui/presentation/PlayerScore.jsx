import React from 'react';
import {iconFor, imageFor} from '../../ui/simbology.js'

export default class PlayerScore extends React.Component {
  pointsLabel(content, key) {
    const value = content.props[key];
    if (value !== 0 && !isNaN(value)) {
      return (
        <span>
          {value}
          <i className={`ui icon ${iconFor(key)}`} />
        </span>
      );
    } else {
      return '';
    }
  }

  render() {
    console.debug('RENDER', this);
    return (
      <tr>
        <td>
          <img
            className="ui tinyx rounded image"
            src={imageFor(this.props.name)}
          />
          {this.props.name[0].toUpperCase() + this.props.name.slice(1)}
        </td>
        <td>
          {this.pointsLabel(this, 'balance')}
        </td>
        <td>
          {this.pointsLabel(this, 'coffee')}
          {this.pointsLabel(this, 'bread')}
          {this.pointsLabel(this, 'mess')}
          {this.pointsLabel(this, 'joke')}
        </td>
        <td>
          {this.props.total}
        </td>
      </tr>
    );
  }
}

PlayerScore.propTypes = {
  name: React.PropTypes.string,
  total: React.PropTypes.number,
};
