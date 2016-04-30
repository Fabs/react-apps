function flushPlayers(players) {
  return {
    type: 'FLUSH_PLAYERS',
    players,
  };
}

function flushTransactions(transactions) {
  return {
    type: 'FLUSH_TRANSACTIONS',
    transactions,
  };
}

function flushModeration(users) {
  return {
    type: 'FLUSH_MODERATION',
    users,
  };
}

export {flushPlayers, flushTransactions, flushModeration};
