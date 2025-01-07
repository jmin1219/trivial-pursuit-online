import cors from "cors";
import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";
import connectDB from "./config/db.js";
import configureSocket from "./config/socket.js";
import gameApiRoutes from "./services/api/routes/gameApiRoutes.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN, "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

const io = new SocketIO(httpServer, {
  cors: {
    origin: [process.env.CLIENT_ORIGIN, "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

configureSocket(io);

connectDB();

app.use("/api/games", gameApiRoutes);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "client", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Trivial Pursuit Online Backend");
  });
}

httpServer.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}.`);
});
