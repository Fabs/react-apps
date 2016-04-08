import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

import React from 'react';
import { render } from 'react-dom';
import ScoreContainer from '/imports/ui/components/ScoreContainer.jsx';
import { Players } from '/imports/api/collections/players.js'

import { createStore, combineReducers } from 'redux';
import { players } from '/imports/reducers/players.js';
import { flush } from '/imports/actions/flushers.js';

const reducers = combineReducers({ players });
const store = createStore(reducers);

Meteor.subscribe('players');
store.autorun = (run) => {
  Tracker.autorun(() => {
    console.log("------ Meteor Updates -------");
    run(store.dispatch);
  });
};

store.autorun(dispatch => {
  const players = Players.find().fetch();
  dispatch(flush(players))
});

store.subscribe(() =>{
  var state = store.getState();
  render(<ScoreContainer state={ state } />, document.getElementById('app'));
});
