import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';

export default class ScoreView extends React.Component {
  render() {
    this.data = [{id: 1, name: 'fabs', points: 10}, {id: 2, name: 'lomba', points: 20 }];
    return (
      <div className="ui container">
        <h1>Hello World</h1>
        <ScoreBoard className='ui container' scoreList={this.data}/>
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