const players = (state = [], action) => {
  switch(action.type) {
      case 'FLUSH_PLAYERS':
        return action.players;
      default:
        return state;
  }
}

export { players };
