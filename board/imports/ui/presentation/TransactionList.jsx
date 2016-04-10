import React from 'react';
import moment from 'moment';

export default class TransactionList extends React.Component {
  formatDate(date){
    return moment(date._d).format('Do de MMMM/YYYY às h:mm:ss a');
  }

  iconFor(transaction){
    return {'coffee': 'coffee', 'bread': 'food', 'coffee/bread': 'coffee', 'joke': 'minus'}[transaction.type]
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.transactions.map((transaction, i) => {
          return(
            <div className="item" key={transaction._id}>
              <i className="large {iconFor(transaction} middle aligned icon"/>
              <div className="content">
                <span>
                  { transaction.owner } em { ' ' }
                  { this.formatDate(transaction.created_at) } -
                  Deu {transaction.points} ponto(s) por <b>{ transaction.type }</b> para { transaction.player }
                </span>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}



