import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
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