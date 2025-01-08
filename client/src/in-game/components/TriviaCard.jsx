import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "../../components/ui/card";
import { useGameContext } from "../../context/GameContext";
import { Button } from "../../components/ui/button";
import { COLORS } from "../../../constants/colors";
import { useState } from "react";

export default function TriviaCard() {
  const { gameState, answerQuestion } = useGameContext();
  const currentQuestion = gameState.currentQuestion;
  const [showAnswer, setShowAnswer] = useState(false);
  const currentTurnPlayer = gameState.players[gameState.currentTurnIndex];
  const playerData = JSON.parse(localStorage.getItem("player-data"));

  const handleAnswerQuestion = (response) => {
    answerQuestion(gameState.gameId, response);
  };

  return (
    <div className="relative w-3/4 p-2 items-center ">
      <Card
        className="relative z-10 w-full p-2"
        style={{
          border: `15px solid ${COLORS[currentQuestion.category].hex}`,
        }}
      >
        {currentTurnPlayer.position[0] === "W" && (
          <div className="absolute inset-0 flex justify-center items-center z-0 top-[-100px] opacity-50">
            <svg width={350} height={350} viewBox="0 0 100 100">
              <path
                d={`M50,50 L${50 + 45 * Math.cos((60 * Math.PI) / 180)},${
                  50 + 45 * Math.sin((60 * Math.PI) / 180)
                } A45,45 0 0,1 ${
                  50 + 45 * Math.cos(((60 + 60) * Math.PI) / 180)
                },${50 + 45 * Math.sin(((60 + 60) * Math.PI) / 180)} Z`}
                strokeWidth="2"
                fill={currentQuestion.category}
              />
            </svg>
          </div>
        )}
        <CardHeader className="relative z-20 mb-1 sm:mb-3 text-center w-full p-0">
          <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl">
            {COLORS[currentQuestion.category].category}
          </CardTitle>
          <CardDescription className="h-full w-full">
            {currentTurnPlayer.name === playerData.name ? (
              <div className="leading-relaxed sm:leading-tight">
                <p className="italic text-xs sm:text-sm md:text-base">
                  Answer the question using the chat.
                </p>
              </div>
            ) : (
              <div className="leading-relaxed sm:leading-tight">
                <p className="italic text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] ">
                  It&apos;s {currentTurnPlayer.name}&apos;s turn!
                </p>
                <p className="italic text-[8px] sm:text-[8px] md:text-[8px] lg:text-[14px] ">
                  Submit whether they got it right or wrong.`
                </p>
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-20 flex flex-col font-semibold items-center mb-4 w-full p-2">
          <p className="mb-2 sm:mb-2 text-[12px] sm:text-[14px] md:text-[18px] leading-tight">
            {currentQuestion.question}
          </p>
          {currentTurnPlayer.name !== playerData.name ? (
            showAnswer ? (
              <div className="flex flex-col items-center mt-4">
                <p className="text-md mb-2">Correct Answer:</p>
                <p className="text-lg">{currentQuestion.answer}</p>
              </div>
            ) : (
              <Button
                onClick={() => setShowAnswer(true)}
                className="text-[8px] sm:text-[10px] p-1 h-4 sm:p-3 items-center flex justify-center"
              >
                Show Answer
              </Button>
            )
          ) : null}
        </CardContent>
        {currentTurnPlayer.name !== playerData.name && (
          <CardFooter className="relative z-20 flex justify-between px-2 sm:px-10">
            <Button
              onClick={() => handleAnswerQuestion("correct")}
              className="text-[10px] sm:text-[12px] p-2 h-5 items-center flex justify-center sm:p-3 sm:h-8 bg-emerald-600"
            >
              Correct
            </Button>
            <Button
              onClick={() => handleAnswerQuestion("wrong")}
              className="text-[10px] sm:text-[12px] p-2 h-5 items-center flex justify-center sm:p-3 sm:h-8 bg-red-600"
            >
              Wrong
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
