import React from 'react';
import TransactionItem from '../presentation/TransactionItem.jsx';
import { scoreSetType, scoreSetPlayer, scoreGrant, scoreGrantFinish } from '/imports/actions/scoring.js';
import { iconFor, imageFor, nameFor } from '/imports/ui/simbology.js'

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
      <div className="ui segment relaxed divided list">
        <TransactionItem key='0' transaction={transaction} onTransactionConfirm={this.confirmTransaction.bind(this)} onTransactionAbort={this.abortTransaction.bind(this)} future={true}/>
      </div>
    );
  }

  //TODO: REFACTOR give it its own component
  //TODO: RESPONSIVE Layout button ugly break
  renderPlayerOptions(){
    return (
      <select onChange={this.selectPlayer.bind(this)} className="ui dropdown select fluid">
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
        {[['coffee','green'],['bread','green'],['joke','red'],['mess','red']].map((props, i) => {
          return (
            <div key={i}
                 onClick={this.selectScoreMode.bind(this,props[0])}
                 className="ui labeled button">
              <div className={`ui button ${props[1]}`}>
                <i className={`icon ${iconFor(props[0])}`}/> { nameFor(props[0])}
              </div>
              <a className={`ui basic ${props[1]} left pointing label`}>
                {props[1] == 'red' ? -1 : 1}
              </a>
            </div>);
          })
        }
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
        return (<span style={{color: 'red'}}>Seu cadastro precisa ser aprovado para poder distribuir Pontos!</span>);
    }
  }

  //TODO: REFACTOR control state and callbacks only
  render() {
    console.debug('RENDER',this);
    if (!this.props.auth.online) { return (<div></div>); }
    return(
      <div className="actionBar">
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
