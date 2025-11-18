import { io } from "socket.io-client";

const clientSocket = io(
  import.meta.env.VITE_SOCKET_URL || "http://localhost:5001",
  {
    transports: ["websocket", "polling"],
  }
);

export default clientSocket;
