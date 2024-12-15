import { Game, Player } from "../../../config/models/GameSchema.js";

export const getAvailableGames = async (req, res) => {
  try {
    const games = await Game.find({ isStarted: false });
    res.json({ games });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
  const gameId = await generateGameId();
  try {
    // Create Player
    const player = new Player(req.body.playerData);
    await player.save();

    // Create New Game
    const game = new Game({ gameId, players: [player._id] });
    await game.save();
    console.log(`🎮 Game Created. GameID: ${game.gameId}`);

    // Store player and game information in localStorage
    res.json({
      message: "Game created with player data.",
      gameId: game.gameId,
      playerData: {
        name: player.name,
        color: player.color,
        gameId: game.gameId,
      },
    });
  } catch (error) {
    console.log(`Error creating game (gameApiControllers.js): ${error}`);
    res.status(500).json({ error: error.message });
  }
};

export const joinGame = async (req, res) => {
  const { gameId, playerData } = req.body;
  try {
    // Create Player
    const player = new Player(playerData);
    await player.save();

    // Add Player to Game
    const game = await Game.findOne({ gameId });
    game.players.push(player._id);
    await game.save();
    console.log(`🎮 Player joined game. GameID: ${game.gameId}`);

    res.json({ message: "Player added", player });
  } catch (error) {
    console.log(`Error joining game (gameApiControllers.js): ${error}`);
    res.status(500).json({ error: error.message });
  }
};

export const getGameData = async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await Game.findOne({ gameId }).populate("players");
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteGame = async (req, res) => {
  const { gameId } = req.params;
  try {
    const response = await Game.deleteOne({ gameId });
    res.json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
