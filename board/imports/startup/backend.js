import Players from '/imports/api/collections/players.js'
import Transactions from '/imports/api/collections/transactions.js'

import { flushPlayers, flushTransactions, flushModeration } from '/imports/actions/flushers.js';
import { doLogin, doLogout } from '/imports/actions/auth.js';

//TODO: REFACTOR too much repetition for every subscribe
const connect = (store, userId) => {
  let playersHandler = Meteor.subscribe('players');
  store.autorun(function(dispatch){
    if(playersHandler.ready()){
      const players = Players.find().fetch();
      console.log(`------ Players Update '${players.length}'`);
      dispatch(flushPlayers(players));
    }
  });

  let probationHandler = Meteor.subscribe('users.moderation');
  store.autorun(function(dispatch){
    if(probationHandler.ready()){
      const users = Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch();
      console.log(`------ Users Update '${users.length}'`);
      dispatch(flushModeration(users));
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

  store.autorun(function(dispatch){
    let user = Meteor.user();
    if(user != null){
      console.log(`------ Login ${Meteor.user()._id}`);
      dispatch(doLogin(user));
    } else {
      console.log(`------ Logout`);
      dispatch(doLogout());
    }
  });
}

export { connect };