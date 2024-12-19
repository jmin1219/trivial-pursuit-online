import e from "express";
import {
  getAvailableGames,
  getChatLog,
  getGameData,
} from "../controllers/gameApiControllers.js";

const router = e.Router();

router.get("/", getAvailableGames);
router.get("/:gameId", getGameData);
router.get("/chat-log/:gameId", getChatLog);

export default router;
