import React from 'react';
import ScoreBoard from '../presentation/ScoreBoard.jsx';

export default class ScoreContainer extends React.Component {
  sortedData() {
    const players = this.context.state.players;
    return players.sort((player1, player2) => {
      const total = player2.total - player1.total;
      if (total === 0) {
        return player2.jokes - player1.jokes;
      }
      return total;
    });
  }

  render() {
    console.debug('RENDER', this);
    return (
      <div className="scoreBoard">
        <h3 className="title">PONTOS</h3>
        <ScoreBoard
          scoreList={this.sortedData()}
          {...this.context.state}
        />
      </div>
    );
  }
}

// TODO: REFACTOR connect
ScoreContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
