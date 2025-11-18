import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clientSocket from "../services/socket.js";

const HomeContext = createContext();

export const useHomeContext = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clientSocket.on("connect", () => {
      console.log(`Connected to home socket server.`);
      clientSocket.emit("fetch-active-games");
    });
    clientSocket.on("fetched-active-games", (games) => {
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
      updateGames(deletedGameId, "delete");
      const playerData = JSON.parse(localStorage.getItem("player-data"));
      if (playerData && playerData.gameId === deletedGameId) {
        localStorage.removeItem("player-data");
        navigate("/");
      }
    });
    return () => {
      clientSocket.off("connect");
      clientSocket.off("fetched-active-games");
      clientSocket.off("game-created");
      clientSocket.off("player-joined");
      clientSocket.off("player-left");
      clientSocket.off("game-started");
      clientSocket.off("game-deleted");
    };
  }, [navigate]);

  // ------------------------------------------

  const updateGames = (data, action) => {
    setGames((prevGames) => {
      switch (action) {
        case "create":
          if (prevGames.some((game) => game.gameId === data.gameId)) {
            return prevGames;
          }
          return [...prevGames, data];
        case "join":
        case "leave":
        case "started":
          return prevGames.map((game) =>
            game.gameId === data.gameId ? data : game
          );
        case "delete":
          return prevGames.filter((game) => game.gameId !== data);
        default:
          return prevGames;
      }
    });
  };

  const socketCreateGame = (playerData) => {
    console.log("🔵 socketCreateGame called with:", playerData);

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        console.error("❌ Socket timeout after 10 seconds");
        reject(new Error("Request timed out - server not responding"));
      }, 10000);

      clientSocket.emit("create-game", playerData, (response) => {
        clearTimeout(timeout);
        console.log("🔵 Server response:", response);

        if (response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  };

  const socketJoinGame = (gameId, playerData) => {
    clientSocket.emit("join-game", { gameId, playerData });
  };

  const socketDeleteGame = (gameId) => {
    clientSocket.emit("delete-game", gameId);
  };

  const socketLeaveGame = (gameId, playerData) => {
    clientSocket.emit("leave-game", { playerData });
  };

  return (
    <HomeContext.Provider
      value={{
        games,
        socketCreateGame,
        socketJoinGame,
        socketDeleteGame,
        socketLeaveGame,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: propTypes.node.isRequired,
};
