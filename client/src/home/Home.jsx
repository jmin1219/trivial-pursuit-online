import { Button } from "@/components/ui/button";
import { createGame, fetchAvailableGames } from "@/services/api/gamesApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import GameCard from "./components/GameCard";
import NewPlayerModal from "./components/NewPlayerModal";

export default function Home() {
  const [mode, setMode] = useState(""); // "create" or "join"
  const [gameId, setGameId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const games = fetchAvailableGames();
  // }, []);

  const handleCreateGame = () => {
    setMode("create");
    setGameId(null);
    setIsModalOpen(true);
  };

  const handleJoinGame = (gameId) => {
    setMode("join");
    setGameId(gameId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitNewPlayer = async ({ playerName, playerColor, gameId }) => {
    const playerData = { name: playerName, color: playerColor };
    if (mode === "create") {
      // Create New Game
      try {
        const response = await createGame({ playerData });
        navigate(`/${response.gameId}`);
      } catch (error) {
        console.error(`Error creating game (Home.jsx): ${error}`);
      }
    } else if (mode === "join") {
      // Join Game
    }
  };

  const handleDeleteGame = (gameId) => {};

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
        No Games Available. Create a new game to start playing.
      </div>

      {/* NEW PLAYER MODAL */}
      {isModalOpen && (
        <NewPlayerModal
          mode={mode}
          gameId={gameId}
          onCancel={closeModal}
          onSubmit={submitNewPlayer}
        />
      )}
    </div>
  );
}
