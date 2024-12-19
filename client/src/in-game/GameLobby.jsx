import { Button } from "@/components/ui/button";
import { initializeGamesSocket } from "@/services/sockets/gamesSocket";
import { CircleHelpIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";

export default function GameLobby() {
  const navigate = useNavigate();
  const gameId = useParams().gameId;

  useEffect(() => {
    initializeGamesSocket(() => {}, navigate);
  }, [navigate]);

  return (
    <div className="flex h-full">
      <div className="w-2/3 h-full">
        <GameBoard />
      </div>
      <div className="w-1/3 h-full flex flex-col">
        <div className="h-1/2">
          <div className="h-2/3 border border-black">
            <Scoreboard />
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
        <div className="h-1/2">
          <ChatBox gameId={gameId} />
        </div>
      </div>
    </div>
  );
}
