import { seedPlayers } from '/imports/startup/seedPlayers.js';

Meteor.startup(function () {
  seedPlayers();
});