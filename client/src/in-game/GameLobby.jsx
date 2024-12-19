import { Button } from "@/components/ui/button";
import { initializeGamesSocket } from "@/services/sockets/gamesSocket";
import { CircleHelpIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import GameBoard from "./components/GameBoard";

export default function GameLobby() {
  const navigate = useNavigate();
  useEffect(() => {
    initializeGamesSocket(() => {}, navigate);
  }, [navigate]);

  const gameId = useParams().gameId;
  return (
    <div className="flex h-full">
      <div className="w-2/3 h-full">
        <GameBoard />
      </div>
      <div className="w-1/3 h-full">
        <div className="h-1/2 w-full border border-black">
          <div className="h-2/3 border border-black">
            <p>Scoreboard</p>
            <div className="absolute bottom-0 left-0 m-2">
              <Button variant="ghost" size="icon">
                {/* TODO: Clicking Icon opens modal for game rules */}
                <CircleHelpIcon size={32} />
              </Button>
            </div>
          </div>
          <div className="h-1/3 border border-black">
            <p>Dice</p>
          </div>
        </div>
        <div className="h-1/2 w-full">
          <ChatBox gameId={gameId} />
        </div>
      </div>
    </div>
  );
}
