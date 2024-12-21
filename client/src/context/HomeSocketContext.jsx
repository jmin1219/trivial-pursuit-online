import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clientSocket from "../services/socket.js";
import propTypes from "prop-types";

const HomeSocketContext = createContext();

export const useHomeSocket = () => useContext(HomeSocketContext);

export const HomeSocketProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clientSocket.on("connect", () => {
      console.log(`Connected to home socket server.`);
    });

    clientSocket.on("available-games", (games) => {
      setGames(games);
    });

    clientSocket.on("game-created", (game) => {
      updateGames(game, "create");
    });

    clientSocket.on("player-joined", (updatedGame) => {
      updateGames(updatedGame, "join");
    });

    clientSocket.on("player-left", (updatedGame) => {
      updateGames(updatedGame, "leave");
    });

    clientSocket.on("game-started", (updatedGame) => {
      updateGames(updatedGame, "started");
    });

    clientSocket.on("game-deleted", (deletedGameId) => {
      updateGames({ id: deletedGameId }, "delete");
      const playerData = JSON.parse(localStorage.getItem("player-data"));
      if (playerData && playerData.gameId === deletedGameId) {
        localStorage.removeItem("player-data");
        navigate("/");
        alert("The game you were in has been deleted.");
      }
    });

    return () => {
      clientSocket.off("available-games");
      clientSocket.off("game-created");
      clientSocket.off("player-joined");
      clientSocket.off("player-left");
      clientSocket.off("game-started");
      clientSocket.off("game-deleted");
    };
  }, [navigate]);

  const updateGames = (updatedGame, action) => {
    setGames((prevGames) => {
      switch (action) {
        case "create":
          if (prevGames.some((game) => game.id === updatedGame.id)) {
            return prevGames;
          }
          return [...prevGames, updatedGame];
        case "join":
        case "leave":
        case "delete":
          return prevGames.filter((game) => game.id !== updatedGame.id);
        case "started":
          return prevGames.map((game) =>
            game.id === updatedGame.id ? updatedGame : game
          );
        default:
          return prevGames;
      }
    });
  };

  const socketCreateGame = (playerData) => {
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

  const socketJoinGame = (gameId, playerData) => {
    clientSocket.emit("join-game", { gameId, playerData });
  };

  const socketDeleteGame = (gameId) => {
    clientSocket.emit("delete-game", { gameId });
  };

  const socketLeaveGame = (playerData) => {
    clientSocket.emit("leave-game", playerData);
  };

  return (
    <HomeSocketContext.Provider
      value={{
        games,
        socketCreateGame,
        socketJoinGame,
        socketDeleteGame,
        socketLeaveGame,
      }}
    >
      {children}
    </HomeSocketContext.Provider>
  );
};

HomeSocketProvider.propTypes = {
  children: propTypes.node.isRequired,
};
