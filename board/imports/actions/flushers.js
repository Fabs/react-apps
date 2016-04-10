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

export { flushPlayers, flushTransactions };
