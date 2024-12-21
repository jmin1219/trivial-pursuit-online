import e from "express";
import {
  getAllGames,
  getChatLog,
  getGameData,
} from "../controllers/gameApiControllers.js";

const router = e.Router();

router.get("/", getAllGames);
router.get("/:gameId", getGameData);
router.get("/chat-log/:gameId", getChatLog);

export default router;
