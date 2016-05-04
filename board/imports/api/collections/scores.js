/* eslint import/no-unresolved: [2, { ignore: ["meteor"]}] */
import {Mongo} from 'meteor/mongo';

const Scores = new Mongo.Collection('scores');
export default Scores;
