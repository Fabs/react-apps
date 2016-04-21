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

const scoreGrant = () => {
  return {
    type: 'SCORE_GRANT_CONFIRM',
  }
}

const scoreGrantCancel = (user) => {
  return {
    type: 'SCORE_GRANT_CANCEL',
    user: user,
  }
}

export { scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantCancel };
