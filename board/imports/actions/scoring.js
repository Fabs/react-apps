function scoreSetType(scoreType) {
  return {
    type: 'SCORE_SET_TYPE',
    scoreType,
  };
}

function scoreSetPlayer(player) {
  return {
    type: 'SCORE_SET_PLAYER',
    player,
  };
}

function scoreGrant(options) {
  return function(dispatch) {
    Meteor.call('player.grant_points', options, (error) => {
      if (!error) {
        dispatch(scoreGrantFinish());
      }
    });
  };
}

function scoreGrantFinish() {
  return {
    type: 'SCORE_GRANT_FINISH',
  };
}

export {scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantFinish};
