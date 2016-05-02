function scoring(state = {step: 0}, action) {
  console.log('CHANGE', action);

  switch (action.type) {
  case 'LOGIN':
    if (action.user.profile.status != null) {
      return {step: 2};
    }
    return state;
  case 'SCORE_SET_ACTING':
    return {step: 2};
  case 'SCORE_SET_PLAYER_TYPE':
    // return Object.assign({},state,{step: step, type: action.scoreType});
    // return Object.assign({},state,{step: 3, player: action.player});
    return state;
  case 'SCORE_GRANT_FINISH':
    return {step: 1};
  default:
    return state;
  }
}

export {scoring};
