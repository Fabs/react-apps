import React from 'react';
import TransactionItem from '../presentation/TransactionItem.jsx';
import { scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantCancel } from '/imports/actions/scoring.js';

export default class ActionBarContainer extends React.Component {
  selectScoreMode(scoreType){
    this.context.store.dispatch(scoreSetType(scoreType));
  }

  selectPlayer(e){
    this.context.store.dispatch(scoreSetPlayer(e.target.value));
  }

  confirmTransaction(){
    this.context.store.dispatch(scoreGrant(this.props.scoring));
  }

  abortTransaction(){
    this.context.store.dispatch(scoreGrantFinish());
  }

  //TODO: REFACTOR give it its own component
  renderActionsWithConfirmation(){
    const transaction = Object.assign({},this.props.scoring,{owner: 'Você', points: 1});
    return(
      <div>
        <TransactionItem key='0' transaction={transaction} onTransactionConfirm={this.confirmTransaction.bind(this)} onTransactionAbort={this.abortTransaction.bind(this)}/>
      </div>
    );
  }

  //TODO: REFACTOR give it its own component
  renderPlayerOptions(){
    return (
      <select onChange={this.selectPlayer.bind(this)} className="ui uix select">
        <option value=''>Escolha alguém</option>
        {this.props.scoreList.map((player, i) => {
          return(
            <option key={i} value={player.name} >{player.name}</option>
          )})}
      </select>
    );
  }

  //TODO: REFACTOR give it its own component
  renderActions(){
    return(
      <div>
        <button onClick={this.selectScoreMode.bind(this,'coffee')} className="ui green button">+<i className="ui icon coffee"/></button>
        <button onClick={this.selectScoreMode.bind(this,'bread')} className="ui green button">+<i className="ui icon food"/></button>
        <button onClick={this.selectScoreMode.bind(this,'joke')} className="ui red button"><b><i className="ui uix icon frown fixThumbs"/></b></button>
        <button onClick={this.selectScoreMode.bind(this,'mess')} className="ui red button"><b><i className="ui uix icon minus"/></b></button>
      </div>
    )
  }

  renderStep(){
    switch(this.props.scoring.step){
      case 1:
        return this.renderActions();
      case 2:
        return this.renderPlayerOptions();
      case 3:
        return this.renderActionsWithConfirmation();
      default:
        return (<span>Seu cadastro precisa ser aprovado para poder distribuir Pontos!</span>);
    }
  }

  //TODO: REFACTOR control state and callbacks only
  render() {
    console.debug('RENDER',this);
    if (!this.props.auth.online) { return (<div></div>); }
    return(
      <div>
        {this.renderStep()}
      </div>
    );
  }
}

//TODO: REFACTOR connect
ActionBarContainer.contextTypes =
{
  store: React.PropTypes.object,
};