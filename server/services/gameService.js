// Desc: Service for handling game logic
import { Game, Player } from "../config/models/GameSchema.js";
import fs from "fs";
import path from "path";
import { SPACES } from "../../shared/constants/spaces.js";

const triviaQuestions = JSON.parse(
  fs.readFileSync(
    path.resolve(`../server/config/TriviaQuestions.json`),
    `utf-8`
  )
);

const generateGameId = async () => {
  let gameId;
  let gameExists = true;
  while (gameExists) {
    gameId = Math.floor(10000 + Math.random() * 90000).toString();
    gameExists = await Game.exists({ gameId: gameId });
  }
  return gameId;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const GameService = {
  getAllGames: async () => {
    return await Game.find().populate("players");
  },

  getGameData: async (gameId) => {
    return await Game.findOne({ gameId }).populate("players");
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
    const game = await Game.findOneAndUpdate(
      { gameId },
      {
        $push: {
          players: player._id,
          chatLog: {
            sender: "server",
            message: `${playerData.name} has joined the game.`,
            timestamp: new Date(),
          },
        },
      },
      { new: true }
    );
    await game.save();
    return game.populate("players");
  },

  startGame: async (gameId) => {
    const game = await Game.findOne({ gameId }).populate("players");
    game.isStarted = true;
    // Shuffle player order
    shuffleArray(game.players);
    // Set dice prompt for first player
    game.diceState.dicePrompt = `${
      game.players[game.currentTurnIndex].name
    }'s turn to roll! Click the Dice to roll.`;
    await game.save();
    return game;
  },

  leaveGame: async (playerData) => {
    const game = await Game.findOneAndUpdate(
      { gameId: playerData.gameId },
      {
        $push: {
          chatLog: {
            sender: "server",
            message: `${playerData.name} has left the game.`,
            timestamp: new Date(),
          },
        },
      },
      { new: true }
    ).populate("players");
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

  updateDiceState: async (gameId, finalDiceValue, prompt) => {
    const game = await Game.findOne({ gameId });
    game.diceState.diceValue = finalDiceValue;
    game.diceState.dicePrompt = prompt;
    game.diceState.isShuffling = false;
    await game.save();
    return game.populate("players");
  },

  calculateReachableSpaces: async (game, currentPosition, diceValue) => {
    const reachableSpaces = new Set();
    const queue = [{ position: currentPosition, remainingDice: diceValue }];
    const visited = new Set();

    while (queue.length > 0) {
      const { position, remainingDice } = queue.shift();
      if (remainingDice === 0) {
        reachableSpaces.add(position);
        continue;
      }
      const currentSpace = SPACES[position];
      for (const neighbor of currentSpace.connections) {
        if (!visited.has(neighbor)) {
          queue.push({ position: neighbor, remainingDice: remainingDice - 1 });
          visited.add(neighbor);
        }
      }
    }
    game.reachableSpaces = Array.from(reachableSpaces);
    await game.save();
    return game;
  },

  movePlayer: async (gameId, spaceId) => {
    const game = await Game.findOne({ gameId }).populate("players");
    const currentPlayer = game.players[game.currentTurnIndex];
    currentPlayer.position = spaceId;
    await currentPlayer.save();
    game.reachableSpaces = [];

    await game.save();
    return game;
  },

  getRandomQuestion: async (gameId, color) => {
    const game = await Game.findOne({ gameId }).populate("players");

    const filteredQuestions = triviaQuestions.filter(
      (q) => q.category === color
    );
    if (filteredQuestions.length === 0) {
      console.log("No questions found for this category.");
      return game;
    }

    let randomQuestionId =
      Math.floor(Math.random() * filteredQuestions.length) + 1;
    while (game.usedQuestionIds.includes(randomQuestionId)) {
      randomQuestionId =
        Math.floor(Math.random() * filteredQuestions.length) + 1;
    }
    game.usedQuestionIds.push(randomQuestionId);
    game.currentQuestion = filteredQuestions[randomQuestionId];
    await game.save();
    return game;
  },

  correctAnswer: async (gameId) => {
    const game = await Game.findOne({ gameId }).populate("players");
    const currentPlayer = game.players[game.currentTurnIndex];

    if (currentPlayer.position[0] === "W") {
      if (currentPlayer.wedges.includes(game.currentQuestion.category)) {
        game.chatLog.push({
          sender: "server",
          message: `${
            game.players[game.currentTurnIndex].name
          } already has this wedge.`,
          timestamp: new Date(),
        });
        await game.save();
        game.currentQuestion = null;
        game.diceState.dicePrompt = `${
          game.players[game.currentTurnIndex].name
        }'s turn to roll! Click the Dice to roll.`;
        await game.save();
        return game;
      } else {
        game.chatLog.push({
          sender: "server",
          message: `${
            game.players[game.currentTurnIndex].name
          } has earned a wedge!`,
          timestamp: new Date(),
        });
        currentPlayer.wedges.push(game.currentQuestion.category);
        await currentPlayer.save();
        await game.save();
      }
    } else {
      game.chatLog.push({
        sender: "server",
        message: `${
          game.players[game.currentTurnIndex].name
        } answered correctly!`,
        timestamp: new Date(),
      });
      await game.save();
    }

    game.currentQuestion = null;
    game.diceState.dicePrompt = `${
      game.players[game.currentTurnIndex].name
    }'s turn to roll! Click the Dice to roll.`;
    await game.save();
    return game;
  },

  wrongAnswer: async (gameId) => {
    const game = await Game.findOne({ gameId }).populate("players");
    game.currentQuestion = null;
    game.chatLog.push({
      sender: "server",
      message: `${
        game.players[game.currentTurnIndex].name
      } answered incorrectly!`,
      timestamp: new Date(),
    });
    game.currentTurnIndex = (game.currentTurnIndex + 1) % game.players.length;
    await game.save();
    game.diceState.dicePrompt = `${
      game.players[game.currentTurnIndex].name
    }'s turn to roll! Click the Dice to roll.`;
    await game.save();
    return game;
  },

  getChatLog: async (gameId) => {
    const game = await Game.findOne({ gameId });
    return game.chatLog;
  },

  addToChatLog: async (gameId, messageData) => {
    const game = await Game.findOneAndUpdate(
      { gameId },
      { $push: { chatLog: messageData } },
      { new: true }
    );
    await game.save();
    return game.chatLog;
  },

  endGame: async (gameId) => {
    const game = await Game.findOne({ gameId }).populate("players");
    await Player.deleteMany({ _id: { $in: game.players } });
    await Game.deleteOne({ gameId });
  },
};
