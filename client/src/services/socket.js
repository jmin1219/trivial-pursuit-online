import { io } from "socket.io-client";

const clientSocket = io("https://trivial-pursuit-online-server.onrender.com");

export default clientSocket;
