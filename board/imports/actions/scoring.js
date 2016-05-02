// function scoreGrant(options) {
//   return function(dispatch) {
//     Meteor.call('player.grant_points', options, (error) => {
//       if (!error) {
//         dispatch(scoreGrantFinish());
//       }
//     });
//   };
// }

function scoreSetPlayers(player) {
  return {
    type: 'SCORE_SET_PLAYER',
    player,
  };
}

function scoreSetType(scoreType) {
  return {
    type: 'SCORE_SET_TYPE',
    scoreType,
  };
}

function scoreGrantFinish() {
  return {
    type: 'SCORE_GRANT_FINISH',
  };
}

function scoreSetActing() {
  return {
    type: 'SCORE_SET_ACTING',
  };
}

// export {scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantFinish, scoreSetActing};
export {scoreGrantFinish, scoreSetActing, scoreSetType, scoreSetPlayers};
