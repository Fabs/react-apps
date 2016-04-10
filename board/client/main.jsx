//Meteor
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

//React
import React from 'react';
import { render } from 'react-dom';
import SegmentsLayout from '/imports/ui/presentation/SegmentsLayout.jsx';

//Redux
import { createStore, combineReducers } from 'redux';
import { players } from '/imports/reducers/players.js';
import { transactions } from '/imports/reducers/transactions.js';
import { flushPlayers, flushTransactions } from '/imports/actions/flushers.js';

//Startup
import '../imports/startup/accounts-config.js';

//Collections
import Players from '/imports/api/collections/players.js'
import Transactions from '/imports/api/collections/transactions.js'

import moment from 'moment';
moment.locale('pt-br');

var runApp = () =>{
  const reducers = combineReducers({ players, transactions });
  const store = createStore(reducers);
  store.autorun = (f) => Tracker.autorun(() => f(store.dispatch));

  let playersHandler = Meteor.subscribe('players');
  store.autorun(function(dispatch){
    if(playersHandler.ready()){
      const players = Players.find().fetch();
      console.log(`------ Players Update '${players.length}'`);
      dispatch(flushPlayers(players));
    }
  });

  let transactionsHandler = Meteor.subscribe('transactions');
  store.autorun(function(dispatch){
    if(transactionsHandler.ready()){
      const transactions = Transactions.find().fetch();
      console.log(`------ Transactions Update '${transactions.length}'`);
      dispatch(flushTransactions(transactions));
    }
  });

  store.subscribe(() =>{
    var state = store.getState();
    render(<SegmentsLayout state={ state } />, document.getElementById('app'));
  });
}

runApp();