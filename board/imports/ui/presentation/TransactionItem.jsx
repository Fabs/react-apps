import React from 'react';
import moment from 'moment';
import { iconFor, imageFor, nameFor } from '/imports/ui/simbology.js'

export default class TransactionList extends React.Component {
  //TODO: V3 Transalate icons
  //TODO: V3 Different messages
  formatDate(date){
    return moment(date._d).format("D [de] MMMM [às] hh:mm");
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
    const player = transaction.player || 'TODOS';
    return (
      <div className="item" key={this.props.key}>
        <i className={iconFor(transaction.type) + " large middle aligned icon"}/>
        <div className="content">
          <span>
            <b>{ transaction.owner }</b>
              { transaction.created_at ? ' em ' + this.formatDate(transaction.created_at): '' }
              { this.props.future ? 'dará' : ' deu ' } <b>{ transaction.points } ponto(s)</b>
              { ' por ' } <b>{ nameFor(transaction.type) }</b>
              { ' para '} <b><span style={{ color: 'green'}}>{ player }</span></b>
            </span>
        </div>
        <span className="ui floated right">
          { this.renderTransactionConfirm() }
          { this.renderTransactionAbort() }
        </span>
      </div>
    );
  }
}
