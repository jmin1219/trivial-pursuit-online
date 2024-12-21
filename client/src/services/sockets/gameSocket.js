import clientSocket from "../socket";

const updateGameState = (setGameState, newGameState) => {
  setGameState(newGameState);
};

export const initializeGameSocket = (
  setGameState,
  setPlayersData,
  setDiceState,
  startDiceShuffling,
  stopDiceShuffling
) => {
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

  clientSocket.on("dice-rolling", () => {
    startDiceShuffling();
  });

  clientSocket.on("dice-rolled", ({ finalDiceValue, prompt }) => {
    stopDiceShuffling({ finalDiceValue, prompt });
  });
};

export const getPlayersData = (gameId) => {
  clientSocket.emit("get-players-data", gameId);
};

export const requestDiceRoll = (gameId, playerName) => {
  clientSocket.emit("request-dice-roll", { gameId, playerName });
};

export const startGame = (gameId) => {
  clientSocket.emit("start-game", { gameId });
};
