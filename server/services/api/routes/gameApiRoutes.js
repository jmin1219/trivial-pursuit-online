import e from "express";
import {
  getAvailableGames,
  getGameData,
} from "../controllers/gameApiControllers.js";

const router = e.Router();

router.get("/", getAvailableGames);
router.get("/:gameId", getGameData);

export default router;
