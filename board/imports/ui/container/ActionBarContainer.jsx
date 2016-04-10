import React from 'react';

export default class ActionBarContainer extends React.Component {
  selectScoreMode(){

  }

  selectPlayer(){

  }

  renderActionsWithConfirmation(){
    return(<div></div>);
  }

  renderPlayerOptions(){
    return (
      <select className="ui uix select">
        <option value=''>Escolha alguém</option>
        {this.props.scoreList.map((player, i) => {
          return(
            <option key={i} value={i}>{player.name}</option>
          )})}
      </select>
    );
  }

  renderActions(){
    return(
      <div>
        <button className="ui green button">+<i className="ui icon coffee"/></button>
        <button className="ui green button">+<i className="ui icon food"/></button>
        <button className="ui red button"><b><i className="ui icon minus"/><i className="ui uix icon frown fixThumbs"/></b></button>
      </div>
    )
  }

  renderStep(){
    switch(this.props.scoring.step){
      case 0:
        return this.renderActions();
      case 1:
        return this.renderPlayerOptions();
      case 2:
        return this.renderActionsWithConfirmation();
      default:
        return (<span>Oops!</span>);
    }
  }

  render() {
    if (!this.props.auth.online) { return (<div></div>); }

    return(
      <div>
        {this.renderStep()}
      </div>
    );
  }
}
