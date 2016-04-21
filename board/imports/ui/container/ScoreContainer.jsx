import React from 'react';
import ScoreBoard from '../presentation/ScoreBoard.jsx';

export default class ScoreContainer extends React.Component {
  sortedData() {
    var players = this.context.state.players;
    return players.sort((a, b) => b.points - a.points);
  }

  render() {
    console.debug('RENDER',this);
    return (
        <ScoreBoard className='ui' scoreList={this.sortedData()} {...this.context.state}/>
    );
  }
}

//TODO: REFACTOR connect
ScoreContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};