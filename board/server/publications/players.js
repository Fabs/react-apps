import { Players } from '/imports/api/collections/players.js';

Meteor.publish('players',() =>{
  return Players.find();
})
