import React from 'react';
import PlayerScore from './PlayerScore.jsx';

export default class ScoreBoard extends React.Component {
  renderPlayers(){
    return this.props.scoreList.map((player) => {
      return(
        <PlayerScore key={player._id} playerName={player.name} playerScore={player.points} playerBalance={player.points} />
      )
    });
  }

  renderPlayerOptions(){
    return (
      <select className="ui uix select">
        <option value=''>Escolha alguém</option>
        {this.props.scoreList.map((player, i) => {
          return(
            <option key={i} value={i}>{player.name}</option>
        )})}
      </select>
    );
  }

//{this.renderPlayerOptions()}
//<button className="ui green button">+<i className="ui icon coffee"/></button>
//<button className="ui green button">+<i className="ui icon food"/></button>
//  <button className="ui red button"><b><i className="ui icon minus"/><i className="ui uix icon frown fixThumbs"/></b></button> 
  renderActions(){
    return(
      <div>

      </div>
    )
  }
  
  render() {
    return (
      <table className="ui striped table">
        <thead>
          <tr>
            <th className="ui uix greyAccent"><h2>Placar</h2></th>
            <th className="ui uix greyAccent right aligned" colSpan="2">
              {this.renderActions()}
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