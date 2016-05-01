import React from 'react';
import ScoreBoard from '../presentation/ScoreBoard.jsx';

export default class ScoreContainer extends React.Component {
  sortedData() {
    const players = this.context.state.players;
    return players.sort((player1, player2) => {
      const total = player1.total - player2.total;
      if (total === 0) {
        return player1.jokes - player2.jokes;
      }
      return total;
    });
  }

  render() {
    console.debug('RENDER', this);
    return (
      <div>
        <h3 className="title">PONTOS</h3>
        <ScoreBoard
          className="ui"
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
