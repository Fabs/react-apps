const players = (state = [], action) => {
  switch(action.type) {
      case 'FLUSH_PLAYERS':
        let players = action.players.map((player) => {
          let points = (player.legacy_points || 0) + (player.coffee || 0) + (player.bread || 0);
          return Object.assign({},player,{ points });
        });
        return players;
      default:
        return state;
  }
}

export { players };
