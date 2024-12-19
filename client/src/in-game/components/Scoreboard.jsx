import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { leaveGame } from "@/services/sockets/gamesSocket";
import { useNavigate } from "react-router-dom";
// import PlayerWedgeToken from "./PlayerWedgeToken";

export default function Scoreboard({ players }) {
  const navigate = useNavigate();

  const handleLeaveGame = () => {
    const playerData = JSON.parse(localStorage.getItem("player-data"));
    if (playerData) {
      leaveGame(playerData);
      localStorage.removeItem("player-data");
      navigate("/");
    }
  };

  return (
    <div className=" w-full h-full flex flex-col">
      <h2>Scoreboard</h2>
      <ul className="player-token-list flex-grow">
        {/* {players.map((p, index) => (
          <li key={p.id}>
            <PlayerWedgeToken playerData={p} playerNum={index + 1} />
          </li>
        ))} */}
      </ul>

      {/* LEAVE GAME BUTTON */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="m-3 text-sm h-7 rounded-lg">
            Leave Game
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLeaveGame}>
              Leave Game
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
