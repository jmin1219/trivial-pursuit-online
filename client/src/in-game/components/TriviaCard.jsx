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
    <div className="relative w-3/4 p-2">
      <Card
        className="relative z-10 w-full p-2"
        style={{
          border: `20px solid ${COLORS[currentQuestion.category].hex}`,
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
        <CardHeader className="relative z-20 mb-4 text-center">
          <CardTitle>{COLORS[currentQuestion.category].category}</CardTitle>
          <CardDescription>
            {currentTurnPlayer.name === playerData.name ? (
              <div className="mt-2">
                <p className="italic">Answer the question using the chat.</p>
              </div>
            ) : (
              <div className="mt-2">
                <p className="italic">
                  It&apos;s {currentTurnPlayer.name}&apos;s turn!
                </p>
                <p className="italic">
                  Submit whether they got it right or wrong.`
                </p>
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-20 flex flex-col items-center mb-8">
          <p className="text-xl mb-5">{currentQuestion.question}</p>
          {currentTurnPlayer.name !== playerData.name ? (
            showAnswer ? (
              <div className="flex flex-col items-center mt-4">
                <p className="text-md mb-2">Correct Answer:</p>
                <p className="text-lg">{currentQuestion.answer}</p>
              </div>
            ) : (
              <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
            )
          ) : null}
        </CardContent>
        {currentTurnPlayer.name !== playerData.name && (
          <CardFooter className="relative z-20 flex justify-between px-20">
            <Button onClick={() => handleAnswerQuestion("correct")}>
              Correct
            </Button>
            <Button onClick={() => handleAnswerQuestion("wrong")}>Wrong</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
