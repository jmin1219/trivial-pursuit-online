import clientSocket from "../socket";

const updateChat = (setChat, newMessageData) => {
  setChat((prevChat) => [...prevChat, newMessageData]);
};

export const initializeChatSocket = (setChat, gameId) => {
  if (!clientSocket.connected) {
    clientSocket.on("connect", () => {
      console.log(`Connected to socket server. (${gameId})`);
      clientSocket.emit("join-chat", { gameId });
    });
  }

  clientSocket.on("receive-message", (messageData) => {
    updateChat(setChat, messageData);
  });

  // Only used when a client joints a game that already has chat messages or refreshes page.
  clientSocket.on("update-chat-log", (chatLog) => {
    setChat(chatLog);
  });
};

export const sendMessage = (gameId, message, sender) => {
  clientSocket.emit("send-message", { gameId, message, sender });
};
