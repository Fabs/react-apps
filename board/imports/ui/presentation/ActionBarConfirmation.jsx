import React from 'react';
import TransactionItem from '../presentation/TransactionItem.jsx';

export default class ActionBarConfirmation extends React.Component {
  canConfirm() {
    const scoring = this.context.state.scoring;
    const activePlayers = Object.keys(scoring.players).filter((p) => scoring.players[p]);
    console.log('UPA', scoring.type, activePlayers.length, activePlayers.length != 0 && scoring.type != null);
    return activePlayers.length != 0 && scoring.type != null;
  }

  renderTransactionConfirm() {
    const action = this.props.onTransactionConfirm;
    if (action) {
      return <button disabled={!this.canConfirm()} className="button green-brand" onClick={action} >Confirmar</button>;
    }
    return '';
  }

  renderTransactionAbort() {
    const action = this.props.onTransactionAbort;
    if (action) {
      return <button disabled={!this.canConfirm()} className="button red-brand" onClick={action} >Cancelar</button>;
    }
    return '';
  }

  render() {
    return (
      <div className="confirmationSelector">
        {this.renderTransactionAbort()}
        <br/>
        {this.renderTransactionConfirm()}
      </div>
    );
  }
}

// TODO: REFACTOR connect
// TODO: Presentation components should not use context
ActionBarConfirmation.contextTypes = {
  store: React.PropTypes.object,
  state: React.PropTypes.object,
};
