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
  getAllGames: async () => {
    return await Game.find().populate("players");
  },

  getGameData: async (gameId) => {
    return await Game.findOne({ gameId })
      .populate("players")
      .populate("chatLog");
  },

  createGame: async (playerData) => {
    const gameId = await generateGameId();
    const player = new Player(playerData);
    await player.save();
    const game = new Game({ gameId, players: [player._id] });
    await game.save();
    return game.populate("players");
  },

  joinGame: async (gameId, playerData) => {
    const player = new Player(playerData);
    await player.save();
    const game = await Game.findOne({ gameId });
    game.players.push(player._id);
    await game.save();
    return game.populate("players");
  },

  startGame: async (gameId) => {
    const game = await Game.findOne({ gameId }).populate("players");
    game.isStarted = true;
    await game.save();
    return game;
  },

  leaveGame: async (playerData) => {
    const game = await Game.findOne({ gameId: playerData.gameId }).populate(
      "players"
    );
    game.players = game.players.filter(
      (player) => player.name !== playerData.name
    );
    await game.save();
    await Player.deleteOne({ name: playerData.name });
    return game;
  },

  deleteGame: async (gameId) => {
    const game = await Game.findOne({ gameId });
    if (game) {
      await Player.deleteMany({ _id: { $in: game.players } });
      await Game.deleteOne({ gameId });
    } else {
      throw new Error(`Game with ID ${gameId} not found.`);
    }
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
};
