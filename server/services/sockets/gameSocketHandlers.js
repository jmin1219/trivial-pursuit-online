import { GameService } from "../../services/gameService.js";

export const gameSocketHandlers = (socket, io) => {
  socket.on("create-game", async (data, cb) => {
    try {
      const game = await GameService.createGame(data.playerData);
      io.emit("game-created", game);
      console.log(`Player ${data.playerData.name} joined game ${game.gameId}`);
      socket.join(game.gameId);
      cb({ gameId: game.gameId });
    } catch (error) {
      console.error(`Error creating game (gameSocketHandlers.js): ${error}`);
      cb({ error: "Error creating game" });
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

  socket.on("start-game", async (data) => {
    try {
      const game = await GameService.startGame(data.gameId);
      io.to(data.gameId).emit("update-game-state", game);
      io.emit("game-started", game);
    } catch (error) {
      console.error("Error starting game (gameSocketHandlers.js):", error);
    }
  });

  socket.on("leave-game", async (data) => {
    try {
      const game = await GameService.leaveGame(data.gameId, data.name);
      if (game.players.length === 0) {
        await GameService.deleteGame(data.gameId);
        io.emit("game-deleted", data.gameId);
      } else {
        const leaveMessage = {
          sender: "server",
          message: `${data.name} has left the game.`,
          timestamp: new Date(),
        };
        await GameService.addToChatLog(data.gameId, leaveMessage);
        io.to(data.gameId).emit("receive-message", leaveMessage);
        io.emit("player-left", game);
      }
    } catch (error) {
      console.error(`Error leaving game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("delete-game", async (data) => {
    try {
      await GameService.deleteGame(data.gameId);
      io.emit("game-deleted", data.gameId);
    } catch (error) {
      console.error(`Error deleting game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("fetch-available-games", async () => {
    try {
      const games = await GameService.getAvailableGames();
      socket.emit("available-games", games);
    } catch (error) {
      console.error(
        `Error fetching available games (gameSocketHandlers.js): ${error}`
      );
    }
  });

  socket.on("update-game-state", async (gameId) => {
    try {
      const game = await GameService.getGameData(gameId);
      socket.emit("game-data", game);
    } catch (error) {
      console.error(
        `Error fetching game data (gameSocketHandlers.js): ${error}`
      );
    }
  });

  socket.on("request-dice-roll", ({ gameId, playerName }) => {
    io.to(gameId).emit("dice-rolling");

    setTimeout(() => {
      const finalDiceValue = Math.floor(Math.random() * 6) + 1;
      const prompt = `${playerName} rolled a ${finalDiceValue}!`;
      io.to(gameId).emit("dice-rolled", { finalDiceValue, prompt });
    }, 2000);
  });
};
