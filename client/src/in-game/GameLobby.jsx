import { Button } from "@/components/ui/button";
import { apiFetchGameData } from "@/services/api/homeApi";
import { initializeGameSocket, startGame } from "@/services/sockets/gameSocket";
import { CircleHelpIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import Dice from "./components/Dice";

export default function GameLobby() {
  const gameId = useParams().gameId;
  const [gameState, setGameState] = useState({});
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    const fetchGameData = async () => {
      const gameData = await apiFetchGameData(gameId);
      setGameState(gameData);
      setPlayersData(gameData.players);
    };
    fetchGameData();
    initializeGameSocket(setGameState, setPlayersData);
  }, [gameId]);

  const handleStartGame = () => {
    setGameState((prevState) => ({
      ...prevState,
      isStarted: true,
    }));
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
          <Scoreboard playersData={playersData} />
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
