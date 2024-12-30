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
import { COLORS } from "../../../../shared/constants/colors";
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
    <Card
      className="w-3/4 p-2"
      style={{
        border: `20px solid ${COLORS[currentQuestion.category].hex}`,
      }}
    >
      <CardHeader className="mb-4 text-center">
        <CardTitle>{COLORS[currentQuestion.category].category}</CardTitle>
        <CardDescription>
          {currentTurnPlayer.name === playerData.name ? (
            <div className="mt-2">
              <p className="italic">Answer the question using the chat.</p>
              <p className="italic">
                One of the other players will determine whether you got it
                right.
              </p>
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
      <CardContent className="flex flex-col items-center mb-8">
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
        <CardFooter className="flex justify-between px-20">
          <Button onClick={() => handleAnswerQuestion("correct")}>
            Correct
          </Button>
          <Button onClick={() => handleAnswerQuestion("wrong")}>Wrong</Button>
        </CardFooter>
      )}
    </Card>
  );
}
