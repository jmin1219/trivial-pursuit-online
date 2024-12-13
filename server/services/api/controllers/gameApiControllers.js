import { Game, Player } from "../../../config/models/GameSchema.js";

export const getAvailableGames = async (req, res) => {
  console.log("Fetching games...");
};

// Generate Unique GameID
const generateGameId = async () => {
  let gameId;
  let gameExists = true;

  while (gameExists) {
    gameId = Math.floor(10000 + Math.random() * 90000).toString();
    gameExists = await Game.exists({ gameId: gameId });
  }
  return gameId;
};

export const createGame = async (req, res) => {
  try {
    // Create Game with Unique GameID
    const gameId = await generateGameId();
    const game = new Game({ gameId });
    await game.save();

    // Create Player
    const { name, color } = req.body.playerData;
    const player = new Player({
      color,
    });
    await player.save();
    console.log("New Player Created", ":", player);

    // Add Player to Game
    game.players.set(name, player); 
    console.log(game);
    res.json({ message: "Game created", gameId: game.gameId });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getGameData = async (req, res) => {};
