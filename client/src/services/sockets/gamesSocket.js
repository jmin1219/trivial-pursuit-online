import clientSocket from "../socket";

const updateGames = (setGames, updatedGame, action) => {
  setGames((prevGames) => {
    switch (action) {
      case "create":
        if (prevGames.some((game) => game.gameId === updatedGame.gameId)) {
          return prevGames;
        }
        return [...prevGames, updatedGame];
      case "join":
      case "leave":
        return prevGames.map((game) =>
          game.gameId === updatedGame.gameId ? updatedGame : game
        );
      case "delete":
        return prevGames.filter((game) => game.gameId !== updatedGame.gameId);
      default:
        return prevGames;
    }
  });
};

export const initializeGamesSocket = (setGames, navigate) => {
  clientSocket.on("connect", () => {
    console.log(`Connected to socket server.`);
  });

  clientSocket.on("available-games", (games) => {
    setGames(games);
  });

  clientSocket.on("game-created", (newGame) => {
    updateGames(setGames, newGame, "create");
  });

  clientSocket.on("player-joined", (updatedGame) => {
    updateGames(setGames, updatedGame, "join");
  });

  clientSocket.on("player-left", (updatedGame) => {
    updateGames(setGames, updatedGame, "leave");
  });

  clientSocket.on("game-deleted", (deletedGameId) => {
    updateGames(setGames, { gameId: deletedGameId }, "delete");
    const playerData = JSON.parse(localStorage.getItem("player-data"));
    if (playerData && playerData.gameId === deletedGameId) {
      localStorage.removeItem("player-data");
      navigate("/");
      alert("The game you were in has been deleted.");
    }
  });
};

export const socketCreateGame = (playerData) => {
  return new Promise((resolve, reject) => {
    clientSocket.emit("create-game", { playerData }, (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.gameId);
      }
    });
  });
};

export const socketJoinGame = (gameId, playerData) => {
  clientSocket.emit("join-game", { gameId, playerData });
};

export const socketDeleteGame = (gameId) => {
  clientSocket.emit("delete-game", { gameId });
};

export const leaveGame = (playerData) => {
  clientSocket.emit("leave-game", playerData);
};

export const fetchAvailableGames = () => {
  clientSocket.emit("fetch-available-games");
};

export const fetchGameData = (gameId) => {
  clientSocket.emit("fetch-game-data", gameId);
};
