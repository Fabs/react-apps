import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ScoreView from './components/ScoreView.jsx';

Meteor.startup(() => {
  render(<ScoreView/>, document.getElementById('app'));
});