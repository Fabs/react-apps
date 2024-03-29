/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-unresolved: [2, { ignore: ["meteor"]}] */

import {expect} from 'meteor/practicalmeteor:chai';
import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';
import {sinon} from 'meteor/practicalmeteor:sinon';
import {grantPointsBatch} from './players.js';
import StubCollections from 'meteor/hwillson:stub-collections';
import Players from '../../imports/api/collections/players.js';
import Scores from '../../imports/api/collections/scores.js';

const sandbox = sinon.sandbox.create();
describe('player.grant_points', function() {
  beforeEach(function() {
    Players.remove({});
    Scores.remove({});
    Players.insert({name: 'a_player'});
    Scores.insert({name: 'score'});
  });

  afterEach(function() {
    Players.remove({});
  });

  it('works only if user is logged in', function() {
    expect(function() {
      Meteor.call(grantPointsBatch.name, {});
    }).to.throw(Error);
  });

  describe('regular user', function() {
    beforeEach(function() {
      sandbox.stub(Meteor, 'user', () => ({
        userId: Random.id(),
        profile: {name: 'Casper'},
      }));
    });

    afterEach(function() {
      sandbox.restore();
    });

    it('all players must exist', function() {
      expect(function() {
        grantPointsBatch.validate({players: ['not_player'], type: 'score'});
      }).to.throw(Error);

      expect(function() {
        grantPointsBatch.validate({players: ['a_player'], type: 'score'});
      }).not.to.throw(Error);
    });

    it('type must exist', function() {
      expect(function() {
        grantPointsBatch.validate({players: ['a_player'], type: 'coffee'});
      }).to.throw(Error);

      expect(function() {
        grantPointsBatch.validate({players: ['a_player'], type: 'score'});
      }).not.to.throw(Error);
    });
  });

  // describe('admin user', function() {
  //   it('admin can add any type', function() {
  //     expect(true).to.be.false;
  //   });
  //
  //   it('admin can add any player', function() {
  //     expect(true).to.be.false;
  //   });
  // });

  // describe('grant points', function() {
  //   it('fails to no player', function() {
  //     expect(true).to.be.false;
  //   });
  //
  //   it('fails to no type', function() {
  //     expect(true).to.be.false;
  //   });
  //
  //   it('to a single player', function() {
  //     expect(true).to.be.false;
  //   });
  //
  //   it('to multiple players', function() {
  //     expect(true).to.be.false;
  //   });
  //
  //   it('many points', function() {
  //     expect(true).to.be.false;
  //   });
  // });
});
