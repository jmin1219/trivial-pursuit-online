import { Game } from "../../config/models/GameSchema.js";

export const chatSocketHandlers = (socket, io) => {
  socket.on("join-chat", async (gameId) => {
    socket.join(gameId);

    const game = await Game.findOne({ gameId });
    if (game) {
      socket.emit("updated-chat-log", game);
    }
  });

  socket.on("send-message", async ({ gameId, message, sender }) => {
    const messageData = { sender, message, timestamp: new Date() };

    const updatedGame = await Game.findOneAndUpdate(
      { gameId },
      {
        $push: { chatLog: messageData },
      },
      { new: true }
    );
    await updatedGame.save();

    io.to(gameId).emit("updated-chat-log", updatedGame);
  });
};
