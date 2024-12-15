import { Button } from "@/components/ui/button";
import {
  createGame,
  fetchAvailableGames,
  joinGame,
} from "@/services/api/homeApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import GameCard from "./components/GameCard";
import NewPlayerModal from "./components/NewPlayerModal";

export default function Home() {
  const [mode, setMode] = useState(""); // "create" or "join"
  const [gameId, setGameId] = useState(null);
  const [games, setGames] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetchAvailableGames().then((games) => {
        setGames(games);
      });
    } catch (error) {
      console.error(`Error fetching available games: ${error}`);
    }
  }, [games]);

  const handleCreateGame = () => {
    if (localStorage.getItem("player-data")) {
      alert(
        "You are already in a game. Please leave the current game to join another one."
      );
      return;
    }
    setMode("create");
    setGameId(null);
    setIsModalOpen(true);
  };

  const handleJoinGame = (gameId) => {
    if (localStorage.getItem("player-data")) {
      alert(
        "You are already in a game. Please leave the current game to join another one."
      );
      return;
    }
    setMode("join");
    setGameId(gameId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitNewPlayer = async ({ playerName, playerColor, gameId }) => {
    const playerData = { name: playerName, color: playerColor };
    if (mode === "create") {
      try {
        // DB POST Request - Create Game
        const response = await createGame({ playerData });
        if (response) {
          setGameId(response.gameId);
          localStorage.setItem(
            "player-data",
            JSON.stringify({
              name: playerName,
              color: playerColor,
              gameId: response.gameId,
            })
          );
          navigate(`/${response.gameId}`);
        }
      } catch (error) {
        console.error(`Error creating game (Home.jsx): ${error}`);
      }
    } else if (mode === "join") {
      try {
        // DB POST Request - Join Game
        const response = await joinGame(gameId, playerData);
        if (response) {
          localStorage.setItem(
            "player-data",
            JSON.stringify({
              name: playerName,
              color: playerColor,
              gameId: gameId,
            })
          );
          navigate(`/${gameId}`);
        }
      } catch (error) {
        console.error(`Error joining game: ${error}`);
      }
    }
  };

  return (
    <div className="home-container h-[100%] flex flex-col items-center">
      {/* HEADER */}
      <div className="home-header px-10 my-8 flex justify-between w-full max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">
          Available Games
        </h1>
        <Button onClick={handleCreateGame} className="create-btn">
          Create Game
        </Button>
      </div>

      {/* GAMES LIST */}
      <div className="p-5 h-[80%] w-[90%] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto border border-gray-300">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.gameId}
              game={game}
              onJoin={() => handleJoinGame(game.gameId)}
            />
          ))
        ) : (
          <p>No Games Available. Create a new game to start playing.</p>
        )}
      </div>

      {/* NEW PLAYER MODAL */}
      {isModalOpen && (
        <NewPlayerModal
          mode={mode}
          gameId={gameId}
          onCancel={closeModal}
          onSubmit={handleSubmitNewPlayer}
        />
      )}
    </div>
  );
}
