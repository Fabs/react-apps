import Titles from '../../imports/api/collections/titles.js';

Meteor.publish('titles', () => Titles.find());
