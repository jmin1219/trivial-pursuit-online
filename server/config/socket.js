import { chatSocketHandlers } from "../services/sockets/chatSocketHandlers.js";
import { gameSocketHandlers } from "../services/sockets/gameSocketHandlers.js";

const configureSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ Connection Socket ID: ${socket.id}`);

    gameSocketHandlers(socket, io);
    chatSocketHandlers(socket, io);

    socket.on("disconnect", () => {
      console.log(`❌ Disconnection Socket ID: ${socket.id}`);
    });
  });

  return io;
};

export default configureSocket;
