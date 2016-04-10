import React from 'react';
import ScoreBoard from '../presentation/ScoreBoard.jsx';
import ActionBar from './ActionBarContainer.jsx';

export default class ScoreContainer extends React.Component {
  sortedData() {
    var players = this.props.players;
    return players.sort((a, b) => b.points - a.points);
  }

  render() {
    return (
      <ScoreBoard className='ui' scoreList={this.sortedData()}/>
    );
  }
}
