const flushPlayers = (players) => {
  return {
    type: 'FLUSH_PLAYERS',
    players
  }
}

const flushTransactions = (transactions) => {
  return {
    type: 'FLUSH_TRANSACTIONS',
    transactions
  }
}

const flushModeration = (users) => {
  return {
    type: 'FLUSH_MODERATION',
    users
  }
}

export { flushPlayers, flushTransactions, flushModeration };
