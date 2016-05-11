/* eslint import/no-unresolved: [2, { ignore: ["meteor"]}] */

import {Meteor} from 'meteor/meteor';
import Titles from '../../imports/api/collections/titles.js';

Meteor.methods({
  'titles.add_title': (name) => {
    const user = Meteor.user();
    if (!user) {
      throw new Meteor.Error('signed_in', 'User is not signed in');
    }
    return Titles.insert({name});
  },
});
