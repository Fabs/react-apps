const flush = (players) => {
  return {
    type: 'FLUSH_PLAYERS',
    players
  }
}
export { flush };
