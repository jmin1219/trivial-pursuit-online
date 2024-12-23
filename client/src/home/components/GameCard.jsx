import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import PropTypes from "prop-types";
import { useHomeSocket } from "../../context/HomeSocketContext";

export default function GameCard({ game, onJoin, onEnter }) {
  const { socketDeleteData } = useHomeSocket();
  const currentPlayerData = JSON.parse(localStorage.getItem("player-data"));
  const { players, isStarted } = game;

  const handleDelete = () => {
    if (currentPlayerData && game.gameId === currentPlayerData.gameId) {
      socketDeleteData(game.gameId);
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
        {/* {!isStarted &&
          (currentPlayerData && game.gameId === currentPlayerData.gameId ? (
            <Button className="bg-[#2196F3]" onClick={onEnter}>
              Enter
            </Button>
          ) : (
            <Button className="bg-[#4CAF50]" onClick={onJoin}>
              Join
            </Button>
          ))}
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button> */}
      </CardFooter>
    </Card>
  );
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  onJoin: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
};
