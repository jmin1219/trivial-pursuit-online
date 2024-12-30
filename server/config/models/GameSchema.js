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
    default: "CH",
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
  chatLog: [
    {
      sender: String,
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  currentTurnIndex: {
    type: Number,
    default: 0,
  },
  diceState: {
    diceValue: {
      type: Number,
      default: 1,
    },
    isShuffling: {
      type: Boolean,
      default: false,
    },
    dicePrompt: {
      type: String,
      default: "Roll Dice!",
    },
  },
  reachableSpaces: {
    type: [String],
    default: [],
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
