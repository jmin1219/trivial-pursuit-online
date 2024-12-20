import clientSocket from "../socket";

const updateGameState = (setGameState, newGameState) => {
  setGameState(newGameState);
};

export const initializeGameSocket = (setGameState, setPlayersData) => {
  clientSocket.on("connect", () => {
    console.log(`Connected to game socket server.`);
  });

  clientSocket.on("update-game-state", (updatedGameState) => {
    updateGameState(setGameState, updatedGameState);
  });

  clientSocket.on("players-data", (playersData) => {
    setPlayersData(playersData);
  });

  clientSocket.on("player-joined", (updatedGameState) => {
    setPlayersData(updatedGameState.players);
  });
};

export const getPlayersData = (gameId) => {
  clientSocket.emit("get-players-data", gameId);
};
