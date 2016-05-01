import React from 'react';
import TransactionItem from '../presentation/TransactionItem.jsx';

export default class ActionBarConfirmation extends React.Component {
  render() {
    return (
      <div className="ui segment relaxed divided list">
        <TransactionItem
          key='0'
          transaction={transaction}
          onTransactionConfirm={this.confirmTransaction.bind(this)}
          onTransactionAbort={this.abortTransaction.bind(this)}
          future={true}
        />
      </div>
    );
  }
}
