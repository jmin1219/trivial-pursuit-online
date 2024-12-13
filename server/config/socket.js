const configureSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ Connection Socket ID: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`❌ Disconnection Socket ID: ${socket.id}`);
    });
  });

  return io;
};

export default configureSocket;
