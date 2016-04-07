import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import ActionBar from './ActionBar.jsx';

export default class ScoreContainer extends React.Component {
  sortedData(){
    return this.data.sort((a,b) => b.points - a.points);
  }

  render() {
    this.data = [
      {id: 1, name: 'fabs', points: 10},
      {id: 2, name: 'lomba', points: 20 },
      {id: 3, name: 'raoni', points: 5 },
      {id: 4, name: 'barbara', points: 18 },
    ];
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
}





// Session.setDefault('counter', 0);
//
// Template.hello.helpers({
//   counter: function () {
//     return Session.get('counter');
//   }
// });
//
// Template.hello.events({
//   'click button': function () {
//     // increment the counter when button is clicked
//     Session.set('counter', Session.get('counter') + 1);
//   }
// });
