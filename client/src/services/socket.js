import { io } from "socket.io-client";

const clientSocket = io("https://trivial-pursuit-online-backend.onrender.com");

export default clientSocket;
