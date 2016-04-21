const scoreSetType = (scoreType) => {
  return {
    type: 'SCORE_SET_TYPE',
    scoreType
  }
}

const scoreSetPlayer = (player) => {
  return {
    type: 'SCORE_SET_PLAYER',
    player
  }
}

const scoreGrant = (options) => {
  return function(dispatch){
    Meteor.call('player.grant_points',options, (error, result) =>{
      if(!error){
        dispatch(scoreGrantFinish());
      }
    });
  }
}

const scoreGrantFinish = () => {
  return {
    type: 'SCORE_GRANT_FINISH',
  }
}

export { scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantFinish };
