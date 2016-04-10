const transactions = (state = [], action) => {
  switch(action.type) {
    case 'FLUSH_TRANSACTIONS':
      return action.transactions;
    default:
      return state;
  }
}

export { transactions };