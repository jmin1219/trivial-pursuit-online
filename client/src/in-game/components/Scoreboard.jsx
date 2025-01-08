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
import { useGameContext } from "../../context/GameContext";

export default function Scoreboard() {
  const navigate = useNavigate();
  const { gameState, leaveGame } = useGameContext();
  const playersData = gameState.players;

  const handleLeaveGame = () => {
    const playerData = JSON.parse(localStorage.getItem("player-data"));
    if (playerData) {
      leaveGame(playerData);
      localStorage.removeItem("player-data");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col h-full p-1 bg-gray-700 text-white rounded-lg relative">
      <div className="w-full h-full flex flex-col rounded-lg border overflow-hidden">
        <div className="flex flex-wrap w-full mb-1 justify-between items-center p-2 gap-1">
          <h2 className="text-center font-bold text-lg mt-1 w-full md:w-auto">
            Scoreboard
          </h2>
          <div className="flex items-center justify-center w-full md:w-auto">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className=" text-sm h-6 rounded-lg"
                >
                  Leave Game
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
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
        </div>
        {/* PLAYER WEDGE TOKENS */}
        <ul
          className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-auto justify-items-center items-center`}
        >
          {playersData &&
            playersData.map((playerData) => (
              <li key={playerData._id}>
                <PlayerWedgeToken playerData={playerData} />
              </li>
            ))}
        </ul>

        {/* LEAVE GAME BUTTON */}
      </div>
    </div>
  );
}
