import { GameService } from "../../gameService.js";

export const getAvailableGames = async (req, res) => {
  try {
    const games = await GameService.getAvailableGames();
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGameData = async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await GameService.getGameData(gameId);
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getChatLog = async (req, res) => {
  const { gameId } = req.params;
  try {
    const chatLog = await GameService.getChatLog(gameId);
    if (chatLog) {
      res.json(chatLog);
    }
  } catch (error) {
    res.status(404).json({ error: "Chat log not found" });
  }
};
