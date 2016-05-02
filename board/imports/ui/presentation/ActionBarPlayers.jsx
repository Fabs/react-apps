import React from 'react';
import {scoreSetPlayers} from '../../actions/scoring.js';
import {iconFor, imageFor, nameFor} from '../simbology.js';

export default class ActionBarPlayers extends React.Component {
  handlePlayerToggle(target) {
    this.context.store.dispatch(scoreSetPlayers(target));
  }

  render() {
    return (
      <div className="playerSelector">
        <span className="title">Selecione um Colega</span>
        <ul className="players">
          {this.props.players.map((player, i) => {
            const state =  this.context.state.scoring.players[player.name] || false;
            let isActive = '';
            if(state){
              isActive = 'active';
            }
            return (
              <li key={i} onClick={this.handlePlayerToggle.bind(this, player)}>
                <img src={imageFor(player.name, state)}></img>
                <span className={isActive}>
                  {player.name[0].toUpperCase() + player.name.slice(1)}
                </span>
              </li>
          )})}
        </ul>
      </div>
    );
  }
}

// TODO: REFACTOR connect
ActionBarPlayers.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
