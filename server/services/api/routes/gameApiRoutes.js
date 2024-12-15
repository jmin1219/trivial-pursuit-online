import e from "express";
import {
  createGame,
  deleteGame,
  getAvailableGames,
  getGameData,
  joinGame,
} from "../controllers/gameApiControllers.js";

const router = e.Router();

router.get("/available-games", getAvailableGames);
router.post("/create-game", createGame);
router.post("/join-game", joinGame);
router.get("/:gameId", getGameData);
router.delete("/:gameId", deleteGame);

export default router;
