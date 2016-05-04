/* eslint import/no-unresolved: [2, { ignore: ["meteor"]}] */
import {Mongo} from 'meteor/mongo';

// TODO: SCHEMA Players
const Players = new Mongo.Collection('players');

Players.available = function() {
  return Players.find().fetch().map((player) => player.name);
};

export default Players;
