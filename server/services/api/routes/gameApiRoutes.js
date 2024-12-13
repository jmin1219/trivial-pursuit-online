import e from "express";
import {
  createGame,
  getAvailableGames,
  getGameData,
} from "../controllers/gameApiControllers.js";

const router = e.Router();

router.get("/", getAvailableGames);
router.get("/:gameId", getGameData);
router.post("/create-game", createGame);

export default router;
