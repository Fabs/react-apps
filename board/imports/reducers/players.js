const players = (state = [], action) => {
  switch(action.type) {
      case 'FLUSH_PLAYERS':
        let players = action.players.map((player) => {
          let coffee = (player.legacy_points || 0) + (player.coffee || 0) - (player.used || 0);
          let total =  coffee + (player.bread || 0);
          let balance = total - (player.mess || 0);
          let joke = (player.joke || 0);
          return Object.assign({} ,player ,{ total, coffee, balance });
        });
        return players;
      default:
        return state;
  }
}

export { players };
