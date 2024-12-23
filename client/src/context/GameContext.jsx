import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clientSocket from "../services/socket.js";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});
  const [diceState, setDiceState] = useState({
    diceValue: 1,
    isShuffling: false,
    dicePrompt: "Roll dice!",
  });
  const { gameId } = useParams();

  useEffect(() => {
    clientSocket.emit("update-game-state", gameId);

    clientSocket.on("connect", () => {
      console.log(`Connected to game socket server for game ${gameId}.`);
    });
    clientSocket.on("updated-game-state", (updatedGameState) => {
      setGameState(updatedGameState);
    });
    clientSocket.on("player-joined", (updatedGameState) => {
      setGameState(updatedGameState);
    });
    clientSocket.on("player-left", (updatedGameState) => {
      setGameState(updatedGameState);
    });
    clientSocket.on("dice-rolling", () => {
      setDiceState((prevState) => ({
        ...prevState,
        isShuffling: true,
        dicePrompt: "Rolling...",
      }));

      const interval = setInterval(() => {
        const randomDiceValue = Math.floor(Math.random() * 6) + 1;
        setDiceState((prevState) => ({
          ...prevState,
          diceValue: randomDiceValue,
        }));
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
      }, 2000);
    });
    clientSocket.on("dice-rolled", ({ finalDiceValue, prompt }) => {
      setDiceState({
        diceValue: finalDiceValue,
        isShuffling: false,
        dicePrompt: prompt,
      });
    });
    return () => {
      clientSocket.off("connect");
      clientSocket.off("update-game-state");
      clientSocket.off("player-joined");
      clientSocket.off("player-left");
      clientSocket.off("dice-rolled");
      clientSocket.off("dice-rolling");
    };
  }, [gameId, diceState]);

  // ------------------------------------------

  const startGame = (gameState) => {
    clientSocket.emit("start-game", gameState);
  };

  const requestRollDice = (gameState) => {
    clientSocket.emit("request-roll-dice", gameState);
  };

  const leaveGame = (playerData) => {
    clientSocket.emit("leave-game", playerData);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        diceState,
        setDiceState,
        startGame,
        requestRollDice,
        leaveGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: propTypes.node.isRequired,
};
