import React from 'react';
import ActionBarContainer from '../container/ActionBarContainer.jsx';
import PlayerScore from '../presentation/PlayerScore.jsx';

export default class ScoreBoard extends React.Component {
  renderPlayers(){
    return this.props.scoreList.map((player) => {
      return(
        <PlayerScore key={player._id} playerName={player.name} playerScore={player.points} playerBalance={player.points} />
      )
    });
  }

  render() {
    return (
      <table className="ui striped table">
        <thead>
          <tr>
            <th className="ui uix greyAccent right aligned" colSpan="3">
              <ActionBarContainer {...this.props} />
            </th>
          </tr>
          <tr>
            <th className="ui uix greyAccent">Maravilhoso Indivíduo</th>
            <th className="ui uix greyAccent">Credito na Lojinha</th>
            <th className="ui uix greyAccent right aligned">Pontos Totais</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  }
}
