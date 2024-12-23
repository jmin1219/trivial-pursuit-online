import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clientSocket from "../services/socket.js";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});
  const [diceState, setDiceState] = useState({
    value: 1,
    isShuffling: false,
    prompt: "Roll dice!",
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
    return () => {
      clientSocket.off("connect");
      clientSocket.off("update-game-state");
    };
  }, [gameId]);

  // ------------------------------------------

  const startGame = (gameId) => {
    clientSocket.emit("start-game", gameId);
  };

  const requestRollDice = (gameId) => {
    clientSocket.emit("request-roll-dice", gameId);
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
