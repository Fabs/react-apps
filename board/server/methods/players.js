import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment-timezone';
import Players from '/imports/api/collections/players.js'
import Transactions from '/imports/api/collections/transactions.js'

Meteor.methods({
  'player.add_points': (name, type, amount) => {
    let user = Meteor.user();
    if (user || process.env.NODE_ENV === "development") {
      let owner = 'O UNIVERSO'
      if (user) {
        owner = user.profile.name
      }

      Transactions.insert({owner: owner, type: type, created_at: moment(), player: name, points: amount});
      let updateField = {};
      updateField[type] = 1;
      Players.update({name}, {$inc: updateField});
    }
  },
  'player.grant_points': (options) =>{
    console.log(options);
    let name = options.player;
    let type = options.type;
    let amount = 1;
    let user = Meteor.user();
    if (user || process.env.NODE_ENV === "development") {
      let owner = 'O UNIVERSO'
      if (user) {
        owner = user.profile.name
      }

      Transactions.insert({owner: owner, type: type, created_at: moment(), player: name, points: amount});
      let updateField = {};
      updateField[type] = 1;
      Players.update({name}, {$inc: updateField});
    }
  },
  'approve.user': (uid) => {
    let user = Meteor.user();
    if(user.profile.status == 'admin'){
      console.log(`Admin approval ${uid}`);
      Meteor.users.update({_id: uid}, {$set: {'profile.status': 'user'}});
    }
  },
});
