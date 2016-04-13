import Players from '/imports/api/collections/players.js';
import Transactions from '/imports/api/collections/transactions.js';

Meteor.publish('players',() =>{
  return Players.find();
})

Meteor.publish('transactions',() =>{
  return Transactions.find();
})

Meteor.publish('users.moderation', function (uid) {
  if(this.userId == uid && Meteor.users.find({status: 'admin', _id: uid}).count()){
    return Meteor.users.find({status: {$exists: false}});
  }
  return this.ready();
})