import React from 'react';
import { render } from 'react-dom';
import SegmentsLayout from '/imports/ui/presentation/SegmentsLayout.jsx';

import { connect } from './backend.js';

import { createStore, combineReducers } from 'redux';
import { players } from '/imports/reducers/players.js';
import { transactions } from '/imports/reducers/transactions.js';
import { auth } from '/imports/reducers/auth.js';
import { scoring } from '/imports/reducers/scoring.js';

const run = () =>{
  const reducers = combineReducers({ players, transactions, auth, scoring });
  const store = createStore(reducers);
  store.autorun = (f) => Tracker.autorun(() => f(store.dispatch));

  connect(store);

  store.subscribe(() =>{
    var state = store.getState();
    //console.log(">>>>>>>>>>>>>>");
    //console.log(state);
    //console.log(">>>>>>>>>>>>>>");
    render(<SegmentsLayout state={ state } />, document.getElementById('app'));
  });
}

export { run };