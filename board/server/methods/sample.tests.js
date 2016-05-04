/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-unresolved: [2, { ignore: ["meteor"]}] */

import {expect} from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';
import {Meteor} from 'meteor/meteor';
import {grantPointsBatch} from './players.js';
import StubCollections from 'meteor/hwillson:stub-collections';
import Players from '/imports/api/collections/players.js';

describe('testing some method', function() {
  before(function() {
    StubCollections.add(Players);
    StubCollections.stub();
  });

  after(function() {
    StubCollections.restore();
  });

  it('call my method', function() {
    expect(true).to.equal(true);
  });
});
