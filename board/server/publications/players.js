import Players from '/imports/api/collections/players.js';
import Transactions from '/imports/api/collections/transactions.js';

Meteor.publish('players',() =>{
  return Players.find();
})

Meteor.publish('transactions',() =>{
  return Transactions.find();
})
