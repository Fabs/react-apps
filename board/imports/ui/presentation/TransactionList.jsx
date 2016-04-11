import React from 'react';
import moment from 'moment';

export default class TransactionList extends React.Component {
  formatDate(date){
    return moment(date._d).format("D [de] MMMM [às] hh:mm");
  }

  iconFor(transaction){
    return {'coffee': 'coffee', 'bread': 'food', 'coffee/bread': 'coffee', 'joke': 'minus'}[transaction.type]
  }

  render() {
    return (
      <div className="ui segment relaxed divided list">
        {this.props.transactionList.map((transaction, i) => {
          return(
            <div className="item" key={transaction._id}>
              <i className={this.iconFor(transaction) + " large iddle aligned icon"}/>
              <div className="content">
                <span>
                  <b>{ transaction.owner }</b>
                  { ' em ' }
                  { this.formatDate(transaction.created_at) }
                  { ' deu ' } <b>{transaction.points} ponto(s)</b>
                  { ' por ' } <b>{ transaction.type }</b>
                  { ' para '} <b><span style={{ color: 'green'}}>{ transaction.player }</span></b>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
