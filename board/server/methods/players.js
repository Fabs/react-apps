import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment-timezone';
import Players from '/imports/api/collections/players.js'
import Transactions from '/imports/api/collections/transactions.js'

//TODO: REFACTOR Organize - Two tier methods
Meteor.methods({
  'player.add_points': (name, type, amount) => {
    console.log(moment().toDate());
    let user = Meteor.user();
    if (user || process.env.NODE_ENV === "development") {
      let owner = 'O UNIVERSO'
      if (user) {
        owner = user.profile.name
      }

      Transactions.insert({owner: owner, type: type, created_at: moment().toDate(), player: name, points: amount});
      let updateField = {};
      updateField[type] = 1;
      Players.update({name}, {$inc: updateField});
    }
  },
  'player.grant_points': (options) =>{
    let name = options.player;
    let type = options.type;
    let amount = 1;
    let user = Meteor.user();
    if (user || process.env.NODE_ENV === "development") {
      let owner = 'O UNIVERSO'
      if (user) {
        owner = user.profile.name
      }

      let updateField = {};
      updateField[type] = 1;
      if(type == 'mess'){
        Transactions.insert({owner: owner, type: type, created_at: moment().toDate(), player: 'TODOS', points: amount});
        Players.update({}, {$inc: updateField}, {multi: true});
      } else {
        Transactions.insert({owner: owner, type: type, created_at: moment().toDate(), player: name, points: amount});
        Players.update({name}, {$inc: updateField});
      }
    }
  },
  'approve.user': (uid) => {
    let user = Meteor.user();
    if(user.profile.status == 'admin'){
      console.log(`Admin approval ${uid}`);
      Meteor.users.update({_id: uid}, {$set: {'profile.status': 'user'}});
    }
  },
  'player.expend': (name, amount) => {
    let user = Meteor.user();
    if(user.profile.status == 'admin'){
      let owner = user.profile.name;
      let type = 'used';
      Transactions.insert({owner: owner, type: type, created_at: moment().toDate(), player: name, points: amount});
      Players.update({name}, {$inc: type});
    }
  }
});
