import axios from "axios";

const apiGames = axios.create({
  baseURL: "http://localhost:3001/api/games",
});

// ------------ HOME ------------
export const fetchAvailableGames = async () => {
  try {
    const response = await apiGames.get("/");
  } catch (error) {
    console.error(error);
  }
};

export const createGame = async (playerData) => {
  try {
    const response = await apiGames.post("/create-game", playerData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error creating game (gameApi.js): ${error}`);
  }
};

// ------------ NEW PLAYER MODAL ------------
export const fetchAvailableColors = async (gameId) => {
  try {
    const response = await api.get(`/api/games/${gameId}`);
  } catch (error) {
    console.error(`Error fetching available colors: ${error.message}`);
  }
};
