import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { useGameContext } from "../../context/GameContext";
import { Button } from "../../components/ui/button";
import { COLORS } from "../../../../shared/constants/colors";

export default function TriviaCard() {
  const { currentQuestion, gameState } = useGameContext();
  console.log(currentQuestion);
  return (
    <Card
      className="w-3/4"
      style={{
        border: `20px solid ${COLORS[currentQuestion.category].hex}`,
      }}
    >
      <CardHeader className="mb-6 text-center">
        <CardTitle>{COLORS[currentQuestion.category].category}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center mb-8">
        <p className="text-xl">{currentQuestion.question}</p>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
