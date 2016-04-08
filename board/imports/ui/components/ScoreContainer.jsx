import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import ActionBar from './ActionBar.jsx';

export default class ScoreContainer extends React.Component {
  sortedData(){
    var state = this.props.state;
    return state.players.sort((a,b) => b.points - a.points);
  }

  render() {
    return (
      <div className="ui stackable container">
        <div className="ui menu header">
          <span className="ui uix greyAccent item">
            <i className="ui icon coffee"/> + <i className="ui icon heart"/> = <i className="ui icon smile"/>
          </span>
          <ActionBar className="ui item right floated"/>
        </div>
        <ScoreBoard className='ui' scoreList={this.sortedData()}/>
      </div>
    );
  }
`
