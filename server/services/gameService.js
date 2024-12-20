// Desc: Service for handling game logic

import { Game, Player } from "../config/models/GameSchema.js";

const generateGameId = async () => {
  let gameId;
  let gameExists = true;
  while (gameExists) {
    gameId = Math.floor(10000 + Math.random() * 90000).toString();
    gameExists = await Game.exists({ gameId: gameId });
  }
  return gameId;
};

export const GameService = {
  getAvailableGames: async () => {
    return await Game.find({ isStarted: false });
  },

  getGameData: async (gameId) => {
    return await Game.findOne({ gameId }).populate("players");
  },

  getChatLog: async (gameId) => {
    const game = await Game.findOne({ gameId });
    return game.chatLog;
  },

  addToChatLog: async (gameId, messageData) => {
    const game = await Game.findOne({ gameId });
    game.chatLog.push(messageData);
    await game.save();
    return game.chatLog;
  },

  createGame: async (playerData) => {
    const gameId = await generateGameId();
    const player = new Player(playerData);
    await player.save();
    const game = new Game({ gameId, players: [player._id] });
    await game.save();
    return game;
  },

  joinGame: async (gameId, playerData) => {
    const player = new Player(playerData);
    await player.save();
    const game = await Game.findOne({ gameId });
    game.players.push(player._id);
    await game.save();
    return game.populate("players");
  },

  leaveGame: async (gameId, playerName) => {
    const game = await Game.findOne({ gameId }).populate("players");
    game.players = game.players.filter((player) => player.name !== playerName);
    await game.save();
    await Player.deleteOne({ name: playerName });
    return game;
  },

  deleteGame: async (gameId) => {
    const game = await Game.findOne({ gameId });
    if (game) {
      await Player.deleteMany({ _id: { $in: game.players } });
      await Game.deleteOne({ gameId });
    }
  },
};
