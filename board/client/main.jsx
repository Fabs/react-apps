import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

import { render } from 'react-dom';
import ScoreContainer from '/imports/ui/components/ScoreContainer.jsx';
import { Players } from '/imports/api/collections/players.js'

Meteor.subscribe('players');
Tracker.autorun(() =>{
  console.log(Players.find().fetch());
});

Meteor.startup(() => {
  render(<ScoreContainer/>, document.getElementById('app'));
});
