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
        <h3 className="title">AUDITORIA</h3>
        <div className="list">
          {this.renderTransactions()}
          <div className="item">
            <i className="icon circular circle" />

            <div className="content">
              <div className="player">
                <b>20 anos atrás</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TransactionList.propTypes = {
  transactionList: React.PropTypes.arrayOf(React.PropTypes.object),
};
