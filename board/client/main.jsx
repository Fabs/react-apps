import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import HelloWorld from './components/hello.jsx';

Meteor.startup(() => {
  render(<HelloWorld/>, document.getElementById('app'));
});