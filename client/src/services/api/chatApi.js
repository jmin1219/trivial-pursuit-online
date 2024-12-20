import axios from "axios";

const apiChat = axios.create({
  baseURL: "http://localhost:3001/api/games/chat-log",
});

export const apiFetchChatLog = async (gameId) => {
  try {
    const response = await apiChat.get(`/${gameId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching chat log: ${error}`);
  }
};

export const apiFetchPlayersData = async (gameId) => {
  try {
    const response = await apiChat.get(`/players/${gameId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching players data: ${error}`);
  }
};
