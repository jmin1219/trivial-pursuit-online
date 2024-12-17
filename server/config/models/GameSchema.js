import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  wedges: {
    type: [String],
    default: [],
  },
  position: {
    type: String,
    default: "central-hub",
  },
});

const gameSchema = new mongoose.Schema({
  gameId: {
    type: String,
    required: true,
    unique: true,
  },
  isStarted: {
    type: Boolean,
    default: false,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  turnOrder: {
    type: [String], // Array of player names in random order
    default: [],
  },
  currentTurnPlayerIndex: {
    type: Number,
    default: 0,
  },
  usedQuestionIds: {
    // Array of trivia id's used in game
    type: [Number],
    default: [],
  },
});

const Game = mongoose.model("Game", gameSchema);
const Player = mongoose.model("Player", playerSchema);

export { Game, Player };
