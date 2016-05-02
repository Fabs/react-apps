import React from 'react';
import TransactionItem from '../presentation/TransactionItem.jsx';

export default class ActionBarConfirmation extends React.Component {
  //onTransactionConfirm={this.confirmTransaction.bind(this)}
  //onTransactionAbort={this.abortTransaction.bind(this)}
  render() {
    return (
      <div className="confirmationSelector">
        <TransactionItem
          key='0'
          transaction={this.props.transaction}
          future={true}
        />
      </div>
    );
  }
}
