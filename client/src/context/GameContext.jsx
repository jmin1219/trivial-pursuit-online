import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import clientSocket from "../services/socket.js";
import { toast } from "react-toastify";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({});
  const [isChoosingSpace, setIsChoosingSpace] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [categoryPickerPrompt, setCategoryPickerPrompt] = useState("");
  const [openGameRules, setOpenGameRules] = useState(false);
  const { gameId } = useParams();
  const navigate = useNavigate();

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
      }, 1400);
    });
    clientSocket.on("player-moved", (updatedGameState) => {
      setGameState(updatedGameState);
      setIsChoosingSpace(false);
    });
    clientSocket.on("category-selected", (category) => {
      clientSocket.emit("request-final-question", { gameId, category });
    });
    clientSocket.on("game-won", (message) => {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      setTimeout(() => {
        localStorage.removeItem("player-data");
        navigate("/");
      }, 3100);
    });
    clientSocket.on("select-final-question-category", () => {
      setCategoryPickerPrompt("Select a category for the final question.");
      setOpenColorPicker(true);
    });

    return () => {
      clientSocket.off("connect");
      clientSocket.off("update-game-state");
      clientSocket.off("player-joined");
      clientSocket.off("player-left");
      clientSocket.off("dice-rolled");
      clientSocket.off("dice-rolling");
      clientSocket.off("game-won");
      clientSocket.off("player-moved");
      clientSocket.off("category-selected");
      clientSocket.off("select-final-question-category");
    };
  }, [gameId, navigate]);

  // ------------------------------------------

  const startGame = (gameState) => {
    clientSocket.emit("start-game", gameState);
  };

  const requestRollDice = (gameState, playerData) => {
    setIsChoosingSpace(true);
    clientSocket.emit("request-roll-dice", { gameState, playerData });
  };

  const leaveGame = (playerData) => {
    clientSocket.emit("leave-game", playerData);
  };

  const movePlayer = (gameId, spaceId) => {
    clientSocket.emit("move-player", { gameId, spaceId });
  };

  const getCHQuestion = (gameId, category) => {
    clientSocket.emit("category-selected", { gameId, category });
  };

  const answerQuestion = (gameId, response) => {
    clientSocket.emit("question-feedback", { gameId, response });
  };

  const getFinalQuestionCategory = (gameId) => {
    clientSocket.emit("get-final-question-category", gameId);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        startGame,
        requestRollDice,
        leaveGame,
        movePlayer,
        isChoosingSpace,
        answerQuestion,
        openColorPicker,
        setOpenColorPicker,
        getCHQuestion,
        getFinalQuestionCategory,
        categoryPickerPrompt,
        setCategoryPickerPrompt,
        openGameRules,
        setOpenGameRules,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: propTypes.node.isRequired,
};
