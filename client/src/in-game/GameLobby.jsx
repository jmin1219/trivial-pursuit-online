import { leaveGame } from "@/services/sockets/gamesSocket";
import { useNavigate } from "react-router-dom";
import GameBoard from "./components/GameBoard";

export default function GameLobby() {
  const navigate = useNavigate();

  const handleLeaveGame = () => {
    const playerData = JSON.parse(localStorage.getItem("playerData"));
    if (playerData) {
      leaveGame(playerData.gameId, playerData);
      localStorage.removeItem("playerData");
      navigate("/");
    }
  };
  return (
    <div className="flex h-full">
      <div className="w-2/3 h-full">
        <GameBoard />
      </div>
    </div>
  );
}
