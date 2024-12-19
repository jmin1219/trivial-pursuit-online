import { leaveGame } from "@/services/sockets/gamesSocket";
import { useNavigate } from "react-router-dom";
import PlayerWedgeToken from "./PlayerWedgeToken";

export default function Scoreboard({ players }) {
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
    <>
      <h2>Scoreboard</h2>
      <ul className={`player-token-list`}>
        {players.map((p, index) => (
          <li key={p.id}>
            <PlayerWedgeToken playerData={p} playerNum={index + 1} />
          </li>
        ))}
      </ul>
    </>
  );
}
