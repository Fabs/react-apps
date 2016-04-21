import React from 'react';
import moment from 'moment';

export default class TransactionList extends React.Component {
  formatDate(date){
    return moment(date._d).format("D [de] MMMM [às] hh:mm");
  }

  iconFor(transaction){
    return {'coffee': 'coffee', 'bread': 'food', 'coffee/bread': 'coffee', 'joke': 'minus'}[transaction.type]
  }

  renderTransactionConfirm(){
    const action = this.props.onTransactionConfirm;
    if(action){
      return <button className="ui button green" onClick={action} >OK</button>;
    }
  }

  renderTransactionAbort(){
    const action = this.props.onTransactionAbort;
    if(action){
      return <button className="ui button red" onClick={action} >CANCELAR</button>;
    }
  }

  render() {
    console.debug('RENDER',this);
    const transaction = this.props.transaction;
    return (
      <div className="item" key={this.props.key}>
        <i className={this.iconFor(transaction) + " large middle aligned icon"}/>
        <div className="content">
          <span>
            <b>{ transaction.owner }</b>
              { transaction.created_at ? ' em ' + this.formatDate(transaction.created_at): '' }
              { ' deu ' } <b>{transaction.points} ponto(s)</b>
              { ' por ' } <b>{ transaction.type }</b>
              { ' para '} <b><span style={{ color: 'green'}}>{ transaction.player }</span></b>
              { this.renderTransactionConfirm() }
              { this.renderTransactionAbort() }
            </span>
        </div>
      </div>
    );
  }
}
