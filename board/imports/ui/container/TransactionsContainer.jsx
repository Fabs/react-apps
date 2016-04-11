import React from 'react';
import TransactionList from '../presentation/TransactionList.jsx'

export default class TransactionContainer extends React.Component {
  sortedData() {
    var transactions = this.props.transactions;
    return transactions.sort((a, b) => b.created_at._d - a.created_at._d);
  }

  render() {
    return (
      <TransactionList className='ui' transactions={this.sortedData()}/>
    );
  }
}
