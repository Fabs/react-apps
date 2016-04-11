import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment-timezone';
import Players from '/imports/api/collections/players.js'
import Transactions from '/imports/api/collections/transactions.js'

Meteor.methods({
  'player.add_points': (name, type, amount) => {
    let user = Meteor.user();
    if (user){
      Transactions.insert({owner: user.profile.name, type: type, created_at: moment(), player: name, points: amount});
      let updateField = {};
      updateField[type] = 1;
      Players.update({name}, {$inc: updateField });
    }
  }
});
