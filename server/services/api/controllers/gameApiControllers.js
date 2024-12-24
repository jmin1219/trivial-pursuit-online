import { GameService } from "../../gameService.js";

export const getGameData = async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await GameService.getGameData(gameId);
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
