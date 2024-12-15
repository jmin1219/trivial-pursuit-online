import axios from "axios";

const apiGames = axios.create({
  baseURL: "http://localhost:3001/api/games",
});

// ------------ HOME ------------
export const fetchAvailableGames = async () => {
  try {
    const response = await apiGames.get("/available-games");
    return response.data.games;
  } catch (error) {
    console.error(`Error fetching available games: ${error}`);
  }
};

export const createGame = async (playerData) => {
  try {
    const response = await apiGames.post("/create-game", playerData);
    return response.data;
  } catch (error) {
    console.error(`Error creating game (gameApi.js): ${error}`);
  }
};

export const joinGame = async (gameId, playerData) => {
  try {
    const response = await apiGames.post(`/join-game`, { gameId, playerData });
    return response.data;
  } catch (error) {
    console.error(`Error joining game (gameApi.js): ${error}`);
  }
};

export const fetchGameData = async (gameId) => {
  try {
    const response = await apiGames.get(`/${gameId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching in-game players: ${error.message}`);
  }
};

// ------------ GAME CARD ------------

export const deleteGame = async (gameId) => {
  try {
    const response = await apiGames.delete(`/${gameId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error deleting game: ${error.message}`);
  }
};
