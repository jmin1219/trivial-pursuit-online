// This file contains API requests that are used to fetch data for the games list and cards.

import axios from "axios";

const apiGames = axios.create({
  baseURL: "http://localhost:3001/api/games",
});

export const apiFetchAvailableGames = async () => {
  try {
    const response = await apiGames.get("/");
    return response.data.games;
  } catch (error) {
    console.error(`Error fetching available games: ${error}`);
  }
};

export const apiFetchGameData = async (gameId) => {
  try {
    const response = await apiGames.get(`/${gameId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching in-game players: ${error.message}`);
  }
};
