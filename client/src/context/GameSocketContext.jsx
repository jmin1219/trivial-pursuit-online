import { createContext, useContext, useEffect, useState } from "react";
import clientSocket from "../services/socket.js";
import propTypes from "prop-types";

const GameSocketContext = createContext();

export const useGameSocket = () => useContext(GameSocketContext);

export const GameSocketProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});
  const [playersData, setPlayersData] = useState([]);
  const [isDiceShuffling, setIsDiceShuffling] = useState(false);
  const [diceValue, setDiceValue] = useState(1);
  const [dicePrompt, setDicePrompt] = useState("Roll Dice");

  const startDiceShuffling = () => {
    setIsDiceShuffling(true);
    setDicePrompt("Rolling Dice...");

    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
  };

  const stopDiceShuffling = ({ finalDiceValue, prompt }) => {
    setIsDiceShuffling(false);
    setDiceValue(finalDiceValue);
    setDicePrompt(prompt);
  };

  useEffect(() => {
    const updateGameState = (newGameState) => {
      setGameState(newGameState);
    };

    clientSocket.on("connect", () => {
      console.log(`Connected to game socket server.`);
    });

    clientSocket.on("update-game-state", (updatedGameState) => {
      updateGameState(updatedGameState);
    });

    clientSocket.on("players-data", (playersData) => {
      setPlayersData(playersData);
    });

    clientSocket.on("player-joined", (updatedGameState) => {
      setPlayersData(updatedGameState.players);
      setGameState(updatedGameState);
    });

    clientSocket.on("dice-rolling", () => {
      startDiceShuffling();
    });

    clientSocket.on("dice-rolled", ({ finalDiceValue, prompt }) => {
      stopDiceShuffling({ finalDiceValue, prompt });
    });

    return () => {
      clientSocket.off("connect");
      clientSocket.off("update-game-state");
      clientSocket.off("players-data");
      clientSocket.off("player-joined");
      clientSocket.off("dice-rolling");
      clientSocket.off("dice-rolled");
    };
  }, []);

  const getPlayersData = (gameId) => {
    clientSocket.emit("get-players-data", gameId);
  };

  const requestDiceRoll = (gameId, playerName) => {
    clientSocket.emit("request-dice-roll", { gameId, playerName });
  };

  const startGame = (gameId) => {
    clientSocket.emit("start-game", { gameId });
  };

  return (
    <GameSocketContext.Provider
      value={{
        gameState,
        playersData,
        getPlayersData,
        requestDiceRoll,
        startGame,
      }}
    >
      {children}
    </GameSocketContext.Provider>
  );
};

GameSocketProvider.propTypes = {
  children: propTypes.node.isRequired,
};
