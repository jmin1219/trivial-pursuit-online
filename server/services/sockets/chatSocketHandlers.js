import { Game } from "../../config/models/GameSchema.js";

export const chatSocketHandlers = (socket, io) => {
  socket.on("join-chat", async ({ gameId }) => {
    socket.join(gameId);
    console.log(`Socket joined chat room: ${gameId}`);

    const game = await Game.findOne({ gameId });
    if (game) {
      socket.emit("update-chat-log", game.chatLog);
    }
  });

  socket.on("send-message", async ({ gameId, message, sender }) => {
    const messageData = { sender, message, timestamp: new Date() };

    await Game.findOneAndUpdate(
      { gameId },
      {
        $push: { chatLog: messageData },
      }
    );

    io.to(gameId).emit("receive-message", messageData);
  });
};
