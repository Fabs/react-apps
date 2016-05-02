function scoring(state = {step: 0, players: {}}, action) {
  let players = {};

  switch (action.type) {
  case 'LOGIN':
    if (action.user.profile.status != null) {
      return {step: 1, players: state.players};
    }
    return state;
  case 'FLUSH_PLAYERS':
    players = state.players;
    action.players.map((player) => {
        players[player.name] = state.players[player.name] || false;
    });
    return {step: state.step, players: players};
  case 'SCORE_SET_PLAYER':
    players = state.players;
    players[action.player.name] = !players[action.player.name];

    return Object.assign({}, state, {players});
  case 'SCORE_SET_ACTING':
    return {step: 2, players: state.players};
  case 'SCORE_SET_TYPE':
    players = state.players;
    if (action.scoreType === 'mess') {
      Object.keys(state.players).map((player) => {
        players[player] = true;
      });
    }
    if (state.type === 'mess') {
      Object.keys(state.players).map((player) => {
        players[player] = false;
      });
    }

    return Object.assign({}, state, {step: state.step, type: action.scoreType, players: players});
  case 'SCORE_GRANT_FINISH':
    return {step: 1, players: state.players};
  default:
    return state;
  }
}

export {scoring};
