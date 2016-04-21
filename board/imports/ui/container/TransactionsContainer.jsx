import React from 'react';
import TransactionList from '../presentation/TransactionList.jsx'

export default class TransactionContainer extends React.Component {
  sortedData() {
    var transactions = this.context.state.transactions;
    return transactions.sort((a, b) => b.created_at - a.created_at);
  }

  render() {
    console.debug('RENDER',this);
    return (
      <TransactionList className='ui' transactionList={this.sortedData()}/>
    );
  }
}

//TODO: REFACTOR connect
TransactionContainer.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
