import React from 'react';
import {iconFor, imageFor, nameFor} from '../simbology.js';

// TODO: RESPONSIVE Layout button ugly break
export default class ActionBarPlayers extends React.Component {
  render() {
    return (
      <div className="playerSelector">
        <span className="title">Selecione um Colega</span>
        <ul className="players">
          {this.props.players.map((player, i) => {
            return (
              <li key={i}>
                <img src={imageFor(player.name, false)}></img>
                {player.name[0].toUpperCase() + player.name.slice(1)}
              </li>
          )})}
        </ul>
      </div>
    );
  }
}
