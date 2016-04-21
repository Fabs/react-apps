import React from 'react';
import { render } from 'react-dom';
import SegmentsLayout from '/imports/ui/presentation/SegmentsLayout.jsx';
import StoreContext from '/imports/ui/StoreContext.jsx';

import { connect } from './backend.js';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { players } from '/imports/reducers/players.js';
import { transactions } from '/imports/reducers/transactions.js';
import { auth, moderatables } from '/imports/reducers/auth.js';
import { scoring } from '/imports/reducers/scoring.js';

const run = () => {
  const reduceF = { players, transactions, auth, scoring , moderatables }
  const reducers = combineReducers(reduceF);
  const middlewares = applyMiddleware(thunk);
  const store = createStore(reducers, middlewares);

  //TODO: IMPROVE Meteor integration
  store.autorun = (f) => Tracker.autorun(() => f(store.dispatch));

  //TODO: REFACTOR subscribe pattern
  connect(store, Meteor.userId());

  store.subscribe(() =>{
    var state = store.getState();
    console.info(state);
    render(
      <StoreContext store={ store }>
        <SegmentsLayout/>
      </StoreContext>,
    document.getElementById('app'));
  });
}

export { run };
