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
import { useNavigate } from "react-router-dom";
import PlayerWedgeToken from "./PlayerWedgeToken";
import { useGameSocket } from "@/context/GameSocketContext";
import { useHomeSocket } from "@/context/HomeSocketContext";

export default function Scoreboard() {
  const { playersData } = useGameSocket();
  const { socketLeaveGame } = useHomeSocket();
  const navigate = useNavigate();

  const handleLeaveGame = () => {
    const playerData = JSON.parse(localStorage.getItem("player-data"));
    if (playerData) {
      socketLeaveGame(playerData);
      localStorage.removeItem("player-data");
      navigate("/");
    }
  };
  console.log(playersData);

  return (
    <div className="flex flex-col h-full p-1 bg-gray-700 text-white rounded-lg relative">
      <div className="w-full h-full flex flex-col rounded-lg border overflow-hidden">
        <h2 className="text-center font-bold text-xl mt-1">Scoreboard</h2>
        {/* PLAYER WEDGE TOKENS */}
        <ul
          className={`w-full h-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-auto justify-items-center items-center`}
        >
          {playersData.map((playerData) => (
            <li key={playerData._id} className="my-1">
              <PlayerWedgeToken playerData={playerData} />
            </li>
          ))}
        </ul>
      </div>

      {/* LEAVE GAME BUTTON */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            className=" text-sm h-7 rounded-lg absolute bottom-3 left-1/2 transform -translate-x-1/2"
          >
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
