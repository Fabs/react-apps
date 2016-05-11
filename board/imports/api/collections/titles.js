/* eslint import/no-unresolved: [2, { ignore: ["meteor"]}] */
import {Mongo} from 'meteor/mongo';

const Titles = new Mongo.Collection('titles');
export default Titles;
