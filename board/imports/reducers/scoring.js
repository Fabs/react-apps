const scoring = (state = {step: 0}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {step: 1};
    case 'SCORE_SET_TYPE':
      if(state.step == 1 || state.step == 2){
        return Object.assign({},state,{step: 2, type: action.scoreType});
      }
      return state;
    case 'SCORE_SET_PLAYER':
      if(state.step == 2 || state.step == 3){
        return Object.assign({},state,{step: 3, player: action.player});
      }
      return state;
    case 'SCORE_GRANT_FINISH':
      return {step: 1};
    default:
      return state;
  }
}

export { scoring };
