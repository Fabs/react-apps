function scoring(state = {step: 0, players: {}}, action) {
  console.log(action, state);
  switch (action.type) {
  case 'LOGIN':
    if (action.user.profile.status != null) {
      return {step: 2, players: state.players};
    }
    return state;
  case 'SCORE_SET_PLAYER':
    console.log(action.player);
    const players = Object.assign({}, state.players);
    players[action.player.name] = !players[action.player.name];

    return Object.assign({}, state, {players});
  case 'SCORE_SET_ACTING':
    return {step: 2, players: state.players};
  case 'SCORE_SET_TYPE':
    return Object.assign({}, state, {step: state.step, type: action.scoreType});
  case 'SCORE_GRANT_FINISH':
    return {step: 1, players: state.players};
  default:
    return state;
  }
}

export {scoring};
