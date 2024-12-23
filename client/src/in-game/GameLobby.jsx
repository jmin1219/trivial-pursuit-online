import { Button } from "@/components/ui/button";
import { CircleHelpIcon } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import Dice from "./components/Dice";
import { useGameSocket } from "../context/GameSocketContext";

export default function GameLobby() {
  const gameId = useParams().gameId;
  const { gameState, playersData, getPlayersData, requestDiceRoll, startGame } =
    useGameSocket();
  useEffect(() => {
    getPlayersData(gameId);
  }, [gameId, getPlayersData]);

  const handleStartGame = () => {
    if (gameState.players.length < 2) {
      alert("You need at least 2 players to start the game.");
      return;
    }
    startGame(gameId);
  };

  return (
    <div className="flex h-full">
      {/* LEFT SIDE - GAMEBOARD */}
      <div className="w-2/3 h-full">
        <GameBoard />
      </div>

      {/* RIGHT SIDE: SCOREBOARD, DICE, & CHAT */}
      <div className="w-1/3 h-full flex flex-col">
        <div className="h-[30%]">
          <Scoreboard />
        </div>
        <div className="h-[25%]">
          {gameState.isStarted === true ? (
            <Dice gameState={gameState} />
          ) : (
            <div className="bg-gray-700 text-white rounded-lg h-full w-full p-1">
              <div className="w-full h-full flex flex-col rounded-lg border justify-center items-center">
                <Button className="bg-emerald-600" onClick={handleStartGame}>
                  Start Game
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="h-[45%]">
          <ChatBox gameId={gameId} />
        </div>
      </div>

      {/* HELP BUTTON: Show Game Rules in left bottom corner */}
      <div className="absolute bottom-0 left-0 m-2">
        <Button variant="ghost" size="icon">
          {/* TODO: Clicking Icon opens modal for game rules */}
          <CircleHelpIcon size={32} />
        </Button>
      </div>
    </div>
  );
}
