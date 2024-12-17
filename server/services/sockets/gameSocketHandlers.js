import { GameService } from "../../services/gameService.js";

export const gameSocketHandlers = (socket, io) => {
  socket.on("create-game", async (data, cb) => {
    try {
      const game = await GameService.createGame(data.playerData);
      io.emit("game-created", game);
      cb({ gameId: game.gameId });
    } catch (error) {
      console.error(`Error creating game (gameSocketHandlers.js): ${error}`);
      cb({ error: "Error creating game" });
    }
  });

  socket.on("join-game", async (data) => {
    try {
      const game = await GameService.joinGame(data.gameId, data.playerData);
      socket.join(data.gameId);
      io.emit("player-joined", game);
    } catch (error) {
      console.error(`Error joining game (gameSocketHandlers.js): ${error}`);
    }
  });

  socket.on("leave-game", async (data) => {
    // TODO: If the game is empty, delete it
    try {
      const game = await GameService.leaveGame(data.gameId, data.playerData);
      io.emit("player-left", game);
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

  socket.on("fetch-game-data", async (gameId) => {
    try {
      const game = await GameService.getGameData(gameId);
      socket.emit("game-data", game);
    } catch (error) {
      console.error(
        `Error fetching game data (gameSocketHandlers.js): ${error}`
      );
    }
  });
};
