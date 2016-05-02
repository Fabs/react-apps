import React from 'react';
import moment from 'moment';
import {iconFor, nameFor} from '../../ui/simbology.js';

export default class TransactionList extends React.Component {
  // TODO: V3 Transalate icons
  // TODO: V3 Different messages
  formatDate(date) {
    if (!date) {
      date = moment();
    }
    return moment(date).format('D [de] MMMM [às] HH:mm');
  }

  render() {
    console.debug('RENDER', this);
    const transaction = this.props.transaction;
    const player = transaction.player || 'TODOS';
    return (
      <div className="item" key={this.props.key} >
        <i className={`${iconFor(transaction.type)} icon circular`} />

        <div className="content">
          <div className="player">
            <span className="accent">{transaction.owner}</span>
            {' para '}
            <span className="accent colorful">{player}</span>
          </div>
          <div className="amount">
            {`${transaction.points} ${nameFor(transaction.type)}`}
          </div>
          <div className="date note">
            {this.formatDate(transaction.created_at)}
          </div>
        </div>
      </div>
    );
  }
}

TransactionList.propTypes = {
  onTransactionConfirm: React.PropTypes.func,
  onTransactionAbort: React.PropTypes.func,
  transaction: React.PropTypes.object.isRequired,
  key: React.PropTypes.number,
};
