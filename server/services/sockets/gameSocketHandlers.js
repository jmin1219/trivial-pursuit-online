import { GameService } from "../../services/gameService.js";

export const gameSocketHandlers = (socket, io) => {
  socket.on("create-game", async (playerData, cb) => {
    try {
      const game = await GameService.createGame(playerData);
      io.emit("game-created", game);
      socket.join(game.gameId);
      cb(game);
    } catch (error) {
      console.error(`Error creating game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("join-game", async (data) => {
    try {
      const game = await GameService.joinGame(data.gameId, data.playerData);
      socket.join(game.gameId);
      io.emit("player-joined", game);

      const joinMessage = {
        sender: "server",
        message: `${data.playerData.name} has joined the game as ${data.playerData.color}.`,
        timestamp: new Date(),
      };

      await GameService.addToChatLog(data.gameId, joinMessage);
      io.to(data.gameId).emit("receive-message", joinMessage);
    } catch (error) {
      console.error(`Error joining game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("start-game", async (gameState) => {
    try {
      const game = await GameService.startGame(gameState.gameId);
      io.to(game.gameId).emit("updated-game-state", game);
      io.emit("game-started", game);
    } catch (error) {
      console.error("Error starting game (gameSocketHandlers.js):", error);
    }
  });

  socket.on("leave-game", async (playerData) => {
    try {
      const game = await GameService.leaveGame(playerData);
      if (game.players.length === 0) {
        await GameService.deleteGame(game.gameId);
        io.emit("game-deleted", game.gameId);
      } else {
        const leaveMessage = {
          sender: "server",
          message: `${playerData.name} has left the game.`,
          timestamp: new Date(),
        };
        await GameService.addToChatLog(game.gameId, leaveMessage);
        io.to(game.gameId).emit("receive-message", leaveMessage);
        io.emit("player-left", game);
      }
    } catch (error) {
      console.error(`Error leaving game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("delete-game", async (gameId) => {
    try {
      await GameService.deleteGame(gameId);
      io.emit("game-deleted", gameId);
    } catch (error) {
      console.error(`Error deleting game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("fetch-active-games", async () => {
    try {
      const games = await GameService.getAllGames();
      socket.emit("fetched-active-games", games);
    } catch (error) {
      console.error(
        `Error fetching available games (gameSocketHandlers.js): ${error}`
      );
    }
  });

  socket.on("update-game-state", async (gameId) => {
    try {
      const game = await GameService.getGameData(gameId);
      socket.emit("updated-game-state", game);
    } catch (error) {
      console.error(
        `Error fetching game data (gameSocketHandlers.js): ${error}`
      );
    }
  });

  socket.on("request-roll-dice", ({ gameState, playerData }) => {
    io.to(gameState.gameId).emit("dice-rolling");

    const finalDiceValue = Math.floor(Math.random() * 6) + 1;
    const prompt = `${playerData.name} rolled a ${finalDiceValue}!`;

    setTimeout(() => {
      io.to(gameState.gameId).emit("dice-rolled", { finalDiceValue, prompt });
    }, 1500);
  });
};
