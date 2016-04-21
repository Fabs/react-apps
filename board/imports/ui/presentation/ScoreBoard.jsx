import React from 'react';
import ActionBarContainer from '../container/ActionBarContainer.jsx';
import PlayerScore from '../presentation/PlayerScore.jsx';

export default class ScoreBoard extends React.Component {
  renderPlayers(){
    return this.props.scoreList.map((player) => {
      return(
        <PlayerScore key={player._id} {...player}/>
      )
    });
  }

  render() {
    console.debug('RENDER',this);
    return (
      <table className="ui striped table">
        <thead>
          <tr>
            <th className="ui uix greyAccent right aligned" colSpan="5">
              <ActionBarContainer {...this.props} />
            </th>
          </tr>
          <tr>
            <th className="ui uix greyAccent" colSpan="2">Maravilhoso Indivíduo</th>
            <th className="ui uix greyAccent">$ Lojinha</th>
            <th className="ui uix greyAccent">Categorias</th>
            <th className="ui uix greyAccent right aligned">Ganhos Total</th>
          </tr>
        </thead>
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  }
}
