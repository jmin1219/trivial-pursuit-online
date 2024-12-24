import e from "express";
import { getGameData } from "../controllers/gameApiControllers.js";

const router = e.Router();

router.get("/:gameId", getGameData);

export default router;
