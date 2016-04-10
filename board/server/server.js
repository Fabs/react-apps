import { seedPlayers } from '/imports/startup/seedPlayers.js';
import moment from 'moment-timezone';

Meteor.startup(function () {
  moment.tz.setDefault("America/Sao_Paulo");
  seedPlayers();
});