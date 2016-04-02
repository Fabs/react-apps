import React from 'react';

export default class PlayerScore extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <i className="child icon"/>
          {this.props.playerName}
        </td>
        <td>{this.props.playerScore}</td>
        <td className="right aligned">{this.props.playerBalance}</td>
      </tr>
    )
  };
}
