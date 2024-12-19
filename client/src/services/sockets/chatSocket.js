import { io } from "socket.io-client";

const clientSocket = io("http://localhost:3001");

const updateChat = (setChat, newMessage) => {
  setChat((prevChat) => [...prevChat, newMessage]);
};

export const initializeChatSocket = (setChat, gameId) => {
  clientSocket.on("connect", () => {
    console.log(`Connected to socket server. (${gameId})`);
    clientSocket.emit("join-chat", { gameId });
  });

  clientSocket.on("receive-message", ({ message }) => {
    updateChat(setChat, message);
  });

  // Only used when a client joints a game that already has chat messages or refreshes page.
  clientSocket.on("update-chat-log", (chatLog) => {
    setChat(chatLog);
  });
};

export const sendMessage = (gameId, message, sender) => {
  clientSocket.emit("send-message", { gameId, message, sender });
};
