import React from 'react';
import PlayerScore from './PlayerScore.jsx';

export default class HelloWorld extends React.Component {
  render() {
    let items = this.props.scoreList.map((player) => {
      return(
       <PlayerScore key={player.id} playerName={player.name} playerScore={player.points} playerBalance={player.points} />
      )
    });
    return (
      <table className="ui celled striped table">
        <thead>
        <tr><th colSpan="3">
          Placar
        </th>
        </tr></thead>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
}
