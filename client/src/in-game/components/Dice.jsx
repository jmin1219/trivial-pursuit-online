import { useEffect, useState } from "react";
import dice1 from "../../assets/dice/dice1.png";
import dice2 from "../../assets/dice/dice2.png";
import dice3 from "../../assets/dice/dice3.png";
import dice4 from "../../assets/dice/dice4.png";
import dice5 from "../../assets/dice/dice5.png";
import dice6 from "../../assets/dice/dice6.png";
import {
  initializeGameSocket,
  requestDiceRoll,
} from "@/services/sockets/gameSocket";
import { useParams } from "react-router-dom";
import propTypes from "prop-types";

export default function Dice({ gameState }) {
  const { gameId } = useParams();
  const [dicePrompt, setDicePrompt] = useState("Roll Dice"); // "Player's Turn to roll. Click to roll" , "Player rolled a 6!"
  const [diceValue, setDiceValue] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const playerData = JSON.parse(localStorage.getItem("player-data"));
  const playerName = playerData?.name;
  console.log(gameState);

  useEffect(() => {
    const setDiceState = ({ finalDiceValue, isShuffling }) => {
      setDiceValue(finalDiceValue);
      setIsShuffling(isShuffling);
    };

    const startDiceShuffling = () => {
      setIsShuffling(true);
      setDicePrompt("Rolling Dice...");

      const intveral = setInterval(() => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomValue);
      }, 100);

      setTimeout(() => {
        clearInterval(intveral);
      }, 2000);
    };

    const stopDiceShuffling = ({ finalDiceValue, prompt }) => {
      setIsShuffling(false);
      setDiceValue(finalDiceValue);
      setDicePrompt(prompt);
    };

    initializeGameSocket(
      null,
      null,
      setDiceState,
      startDiceShuffling,
      stopDiceShuffling
    );
  }, []);

  const shuffleDice = () => {
    if (isShuffling) return;
    requestDiceRoll(gameId, playerName);
  };

  return (
    <div className="flex flex-col bg-gray-700 text-white rounded-lg relative h-full w-full p-1">
      <div className="w-full h-full flex flex-col rounded-lg border overflow-hidden p-1">
        {/* DICE IMAGE */}
        <div
          className="flex justify-center items-center h-3/4 pt-2 cursor-pointer"
          onClick={shuffleDice}
        >
          <img
            src={diceImages[diceValue - 1]}
            alt={`dice-${diceValue}`}
            className={`object-contain h-full w-full max-h-24 ${
              isShuffling && "animate-spin"
            }`}
          />
        </div>
        {/* DICE MESSAGE PROMPT */}
        <div className="flex justify-center items-center h-1/4">
          <p className="font-bold">{dicePrompt}</p>
        </div>
      </div>
    </div>
  );
}

Dice.propTypes = {
  gameState: propTypes.object.isRequired,
};
