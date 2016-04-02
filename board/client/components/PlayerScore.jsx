import React from 'react';

export default class PlayerScore extends React.Component {
  render() {
    return (
      <tr>
        <td className="collapsing">
          <i className="folder icon"/>
          {this.props.playerName}
        </td>
        <td>{this.props.playerScore}</td>
        <td className="right aligned collapsing">{this.props.playerBalance}</td>
      </tr>
    )
  };
}
