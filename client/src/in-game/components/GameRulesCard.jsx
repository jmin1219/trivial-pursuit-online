import { Button } from "@/components/ui/button";
import { useGameContext } from "../../context/GameContext";
import { X } from "lucide-react";

export default function GameRulesCard() {
  const { setOpenGameRules } = useGameContext();
  return (
    <>
      <div className="p-4 rounded-2xl shadow-2xl h-full w-full overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Game Rules</h2>
        <h4 className="text-lg font-semibold">Objective</h4>
        <p className="mb-4 text-sm">
          To move along the game board correctly answeing questions and to
          collect all colored wedges for correctly answering the questions in
          each of the six category wedge areas (at the base of each spoke). To
          win, a player must collect all wedges and then return to the central
          hub and correctly answer the game-winning question in a category
          chosen by the other players.
        </p>
        <h4 className="text-lg font-semibold">Gameplay</h4>
        <p className="mb-4 text-sm">
          When one of the players clicks &quot;Start Game&quot;, the game will
          automatically randomize the order of the players currently in the
          game.
          <br />
          <br />
          On each turn, the player will roll the dice by clicking on it. Based
          on the number rolled, the player will be shown spaces he/she can move
          to on the board. The player can click on one of the highlighted spaces
          to move to that space. Then, the player will be asked a question based
          on the color of the space he/she landed on. If the player answers the
          question correctly, he/she will be able to roll again. If the player
          answers the question incorrectly, the turn will be passed to the next
          player.
        </p>
        <div className="flex justify-center">
          <table className="w-3/4 text-sm text-center table-fixed mb-4">
            <thead className="text-slate-200 bg-gray-700">
              <th className="border py-1">Colors</th>
              <th className="border py-1">Categories</th>
            </thead>
            <tbody>
              <tr className="text-sm" style={{ backgroundColor: "#1E90FF" }}>
                <td className="border ">Blue</td>
                <td className="border ">Geography</td>
              </tr>
              <tr className="text-sm" style={{ backgroundColor: "#FF1493" }}>
                <td className="border ">Pink</td>
                <td className="border ">Entertainment</td>
              </tr>
              <tr className="text-sm" style={{ backgroundColor: "#e8e800" }}>
                <td className="border ">Yellow</td>
                <td className="border ">History</td>
              </tr>
              <tr className="text-sm" style={{ backgroundColor: "#FFA500" }}>
                <td className="border ">Orange</td>
                <td className="border ">Sports & Leisure</td>
              </tr>
              <tr className="text-sm" style={{ backgroundColor: "#32CD32" }}>
                <td className="border ">Green</td>
                <td className="border ">Science & Nature</td>
              </tr>
              <tr className="text-sm" style={{ backgroundColor: "#800080" }}>
                <td className="border ">Purple</td>
                <td className="border ">Art & Literature</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm">
          When answering questions, players can use the chat to communicate with
          each other. Other players not answering the question will be able to
          see the answer of the current question. If the other players believe
          the current player has answered the question correctly through the
          chat, any on of the other players can click on the &quot;Correct&quot;
          button.
          <br />
          <br />
          Whenever a player lands on a wedge space (or category headquarter) and
          answers the question correctly, the player will be awarded a wedge of
          that color. The player can only win a wedge of a color if he/she does
          not already have that color wedge. The status of the wedges collected
          by each player can be seen on the right side of the game board.
          <br />
          <br />
          When a player lands on the central hub, the player will be able to
          select the category of their question.
        </p>
        <h4 className="text-lg font-semibold">Winning the Game</h4>
        <p className="mb-4 text-sm">
          Once you&apos;ve collected all six wedges, make your way to the
          central hub and try to answer the game-winning question. You must land
          on the central hub by the exact count.
          <br />
          <br />
          When you do land on the central hub, any of the other players will be
          able to choose the category of the game-winning question. If you
          answer the question correctly, you win the game! If you answer
          incorrectly, you&apos;ll have to wait for your next turn, leave the
          central hub, and make your way back to the hub again for another try.
        </p>
      </div>
      <Button
        className="absolute top-6 right-9 h-7 w-7"
        variant="ghost"
        onClick={() => setOpenGameRules(false)}
      >
        <X size={8} />
      </Button>
    </>
  );
}
