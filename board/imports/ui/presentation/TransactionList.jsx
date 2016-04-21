import React from 'react';
import TransactionItem from './TransactionItem.jsx'

export default class TransactionList extends React.Component {
  render() {
    console.debug('RENDER',this);
    return (
      <div className="ui segment relaxed divided list">
        {this.props.transactionList.map((transaction, i) => {
          return(
            <TransactionItem key={transaction._id} transaction={transaction} />
          )
        })}
      </div>
    );
  }
}
