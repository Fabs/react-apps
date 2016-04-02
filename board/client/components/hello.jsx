import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    this.data = [{name: 'fabs', points: 10}, {name: 'lomba', point: 20 }]
    let items = this.data.map((item) => {
      return(
        <tr>
          <td className="collapsing">
            <i className="folder icon"/>
            {item.name}
          </td>
          <td>{item.name}</td>
          <td className="right aligned collapsing">10 hours ago</td>
        </tr>)
    });
    return (
      <div className="ui container">
        <h1>Hello World</h1>
        <table className="ui celled striped table">
          <thead>
          <tr><th colspan="3">
            Placar
          </th>
          </tr></thead>
          <tbody>
          {items}
          </tbody>
        </table>
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