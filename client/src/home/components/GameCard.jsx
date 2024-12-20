import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { apiFetchGameData } from "@/services/api/homeApi";
import { socketDeleteGame } from "@/services/sockets/homeSocket";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameCard({ game, onJoin }) {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await apiFetchGameData(game.gameId);
        setPlayers(response.players);
      } catch (error) {
        console.error(`Error fetching in-game players: ${error.message}`);
      }
    };
    fetchPlayers();
  }, [game]);

  const currentPlayerData = JSON.parse(localStorage.getItem("player-data"));

  const onEnter = () => {
    navigate(`/${game.gameId}`);
  };

  const handleDelete = async () => {
    // TODO: Check if the current player is in the game before deleting it
    if (currentPlayerData && game.gameId === currentPlayerData.gameId) {
      socketDeleteGame(game.gameId);
      localStorage.removeItem("player-data");
    } else {
      alert("You can't delete a game you're not in.");
    }
  };

  return (
    <Card className="p-4 shadow-lg flex flex-col justify-between h-64 border border-black">
      <div className="flex-grow">
        <CardTitle className="text-xl text-center mb-2 border rounded-lg">
          Game ID: {game.gameId}
        </CardTitle>
        <CardContent className="p-3 mt-2 border rounded-lg">
          <Label className="text-md mb-1">Players ({players.length}): </Label>
          <ul className="list-none grid grid-cols-2 gap-x-1 gap-y-1 mt-2 text-sm text-center">
            {players.map((player, index) => (
              <li key={index} className={`text-${player.color}`}>{`${
                player.name
              } - ${player.color.toUpperCase()}`}</li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between p-4">
        {currentPlayerData && game.gameId === currentPlayerData.gameId ? (
          <Button className="bg-[#2196F3]" onClick={onEnter}>
            Enter
          </Button>
        ) : (
          <Button className="bg-[#4CAF50]" onClick={onJoin}>
            Join
          </Button>
        )}
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  onJoin: PropTypes.func.isRequired,
};
