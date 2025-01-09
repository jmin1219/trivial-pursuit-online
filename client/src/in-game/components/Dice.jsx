import { toast } from "react-toastify";
import dice1 from "../../assets/dice/dice1.png";
import dice2 from "../../assets/dice/dice2.png";
import dice3 from "../../assets/dice/dice3.png";
import dice4 from "../../assets/dice/dice4.png";
import dice5 from "../../assets/dice/dice5.png";
import dice6 from "../../assets/dice/dice6.png";
import { useGameContext } from "../../context/GameContext";

export default function Dice() {
  const { gameState, requestRollDice, isChoosingSpace } = useGameContext();
  const { diceState } = gameState;
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const playerData = JSON.parse(localStorage.getItem("player-data"));

  const handleRollDice = () => {
    if (diceState.isShuffling) return;
    if (isChoosingSpace) {
      toast.warn("You already rolled the dice. Please choose a space.", {
        position: "top-right",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    } else if (
      gameState.players[gameState.currentTurnIndex].name !== playerData.name
    ) {
      toast.warn("It's not your turn to roll the dice!", {
        position: "top-right",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    } else if (gameState.currentQuestion) {
      toast.warn("You need to answer the trivia question", {
        position: "top-right",
        theme: "colored",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    }
    requestRollDice(gameState, playerData);
  };

  if (!gameState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col bg-gray-700 text-white rounded-lg relative h-full w-full p-1">
      <div className="w-full h-full flex flex-col justify-center items-center rounded-lg border overflow-hidden p-1">
        {/* DICE IMAGE */}
        <div
          className="flex h-2/3 justify-center items-center cursor-pointer"
          onClick={handleRollDice}
        >
          <img
            src={diceImages[diceState.diceValue - 1]}
            alt={`dice-${diceState.diceValue}`}
            className={`object-contain max-h-24 m-2 lg:w-[100%] lg:h-[100%] md:w-[75%] md:h-[75%] sm:w-[70%] sm:h-[70%] w-[60%] h-[60%] ${
              diceState.isShuffling && "animate-spin"
            }`}
          />
        </div>
        {/* DICE MESSAGE PROMPT */}
        <div className="flex justify-center items-center h-1/3 w-full">
          <p className="font-bold text-xs sm:text-sm md:text-md lg:text-lg">
            {diceState.dicePrompt}
          </p>
        </div>
      </div>
    </div>
  );
}
