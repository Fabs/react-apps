import React from 'react';
import TransactionItem from './TransactionItem.jsx';

export default class TransactionList extends React.Component {
  renderTransaction(transaction) {
    return (
      <TransactionItem key={transaction._id} transaction={transaction} />
    );
  }

  renderTransactions() {
    return this.props.transactionList.map(this.renderTransaction);
  }

  render() {
    console.debug('RENDER', this);
    return (
      <div className="timeline">
        <h2 className="title">Auditoria</h2>
        <div className="list">
          {this.renderTransactions()}
        </div>
      </div>
    );
  }
}

TransactionList.propTypes = {
  transactionList: React.PropTypes.arrayOf(React.PropTypes.object),
};
