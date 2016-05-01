import React from 'react';
import ActionBarContainer from '../container/ActionBarContainer.jsx';
import PlayerScore from '../presentation/PlayerScore.jsx';

export default class ScoreBoard extends React.Component {
  renderPlayer(player) {
    return (
      <PlayerScore key={player._id} {...player} />
    );
  }

  renderPlayers() {
    return this.props.scoreList.map(this.renderPlayer);
  }

  render() {
    console.debug('RENDER', this);
    return (
      <div>
        <ActionBarContainer {...this.props} />
        <table className="">
          <thead>
            <tr>
              <th className="">Maravilhoso Indivíduo</th>
              <th className="">$ Lojinha</th>
              <th className="">Categorias</th>
              <th className="">Ganhos Total</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPlayers()}
          </tbody>
        </table>
      </div>
    );
  }
}

ScoreBoard.propTypes = {
  scoreList: React.PropTypes.arrayOf(React.PropTypes.object),
};
