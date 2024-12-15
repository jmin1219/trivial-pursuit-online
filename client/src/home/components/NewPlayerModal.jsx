import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchGameData } from "@/services/api/homeApi";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { COLORS } from "../../../../shared/constants/colors";

export default function NewPlayerModal({ mode, gameId, onCancel, onSubmit }) {
  const [availableColors, setAvailableColors] = useState(Object.keys(COLORS));
  const [playerName, setPlayerName] = useState("");
  const [existingPlayerNames, setExistingPlayerNames] = useState([]);
  const [playerColor, setPlayerColor] = useState("");

  useEffect(() => {
    const fetchColorsAndNames = async () => {
      if (mode === "join") {
        try {
          const response = await fetchGameData(gameId);
          const usedColors = response.players.map((player) => player.color);
          const usedNames = response.players.map((player) => player.name);
          setAvailableColors(
            Object.keys(COLORS).filter((color) => !usedColors.includes(color))
          );
          setExistingPlayerNames(usedNames);
        } catch (error) {
          console.error(`Error fetching available colors: ${error.message}`);
        }
      }
    };
    fetchColorsAndNames();
  }, [mode, gameId]);

  const handleSubmit = () => {
    if (!playerName || !playerColor) {
      alert("Please fill out all fields.");
      return;
    }
    if (existingPlayerNames.includes(playerName)) {
      alert("Player name already exists. Please choose another name.");
      return
    }
    onSubmit({ playerName, playerColor, gameId });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>New Player</CardTitle>
          <CardDescription>Select a player name and color.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* TODO: Make these inputs required and check for duplicate player names in game. */}
          <form className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1">
              <Label className="text-md">Player Name</Label>
              <Input
                id="player-name"
                placeholder="Enter your player name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label className="text-md">Player Color</Label>
              <Select onValueChange={setPlayerColor} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select an available color" />
                </SelectTrigger>
                <SelectContent>
                  {availableColors.map((color) => {
                    return (
                      <SelectItem key={color} value={color}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between mt-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

NewPlayerModal.propTypes = {
  mode: PropTypes.string.isRequired,
  gameId: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
