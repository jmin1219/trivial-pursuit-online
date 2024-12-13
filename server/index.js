import cors from "cors";
import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";
import connectDB from "./config/db.js";
import configureSocket from "./config/socket.js";
import gameApiRoutes from "./services/api/routes/gameApiRoutes.js";

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

const io = new SocketIO(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

configureSocket(io);

connectDB();

app.use("/api/games", gameApiRoutes);

httpServer.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
