import Players from '/imports/api/collections/players.js';
import Scores from '/imports/api/collections/scores.js';

const Game = {
  players() {
    return Players.find().fetch().map((player) => player.name);
  },
  scores() {
    return Scores.find().fetch().map((score) => score.name);
  },
};

export default Game;
