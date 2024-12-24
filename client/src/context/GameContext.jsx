import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clientSocket from "../services/socket.js";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});
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
      setGameState((prevState) => ({
        ...prevState,
        diceState: {
          ...prevState.diceState,
          dicePrompt: "",
          isShuffling: true,
        },
      }));

      const interval = setInterval(() => {
        const randomDiceValue = Math.floor(Math.random() * 6) + 1;
        setGameState((prevState) => ({
          ...prevState,
          diceState: {
            ...prevState.diceState,
            diceValue: randomDiceValue,
          },
        }));
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
      }, 1010);
    });
    clientSocket.on("dice-rolled", ({ finalDiceValue, prompt }) => {
      setGameState((prevState) => ({
        ...prevState,
        diceState: {
          ...prevState.diceState,
          diceValue: finalDiceValue,
          dicePrompt: prompt,
          isShuffling: false,
        },
      }));
    });
    return () => {
      clientSocket.off("connect");
      clientSocket.off("update-game-state");
      clientSocket.off("player-joined");
      clientSocket.off("player-left");
      clientSocket.off("dice-rolled");
      clientSocket.off("dice-rolling");
    };
  }, [gameId]);

  // ------------------------------------------

  const startGame = (gameState) => {
    clientSocket.emit("start-game", gameState);
  };

  const requestRollDice = (gameState, playerData) => {
    clientSocket.emit("request-roll-dice", { gameState, playerData });
  };

  const leaveGame = (playerData) => {
    clientSocket.emit("leave-game", playerData);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
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
