import React from 'react';

export default class PlayerScore extends React.Component {
  render() {
    console.debug('RENDER',this);
    return (
      <tr>
        <td>
          <img className="ui tiny circular image" src={ "https://robohash.org/" + this.props.playerName }/>
          {this.props.playerName}
        </td>
        <td>{this.props.playerScore}</td>
        <td className="right aligned">{this.props.playerBalance}</td>
      </tr>
    )
  };
}
