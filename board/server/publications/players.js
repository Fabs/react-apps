import Players from '/imports/api/collections/players.js';
import Transactions from '/imports/api/collections/transactions.js';

Meteor.publish('players',() =>{
  return Players.find();
})

Meteor.publish('transactions',() =>{
  return Transactions.find();
})

Meteor.publish('users.moderation', function () {
  const isAdmin = Meteor.users.find({'profile.status': 'admin', _id: this.userId}).count() == 1;
  if(isAdmin){
    console.info('Admin in da haus!')
    return Meteor.users.find({'profile.status': {$exists: false}});
  }
  return this.ready();
})