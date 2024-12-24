import { createContext, useContext, useEffect, useRef } from "react";
import { useGameContext } from "./GameContext";
import propTypes from "prop-types";
import clientSocket from "../services/socket.js";
import { useParams } from "react-router-dom";

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const { gameState, setGameState } = useGameContext();
  const { chatLog } = gameState;
  const { gameId } = useParams();

  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
    clientSocket.emit("join-chat", gameId);

    clientSocket.on("updated-chat-log", (updatedGame) => {
      setGameState((prevState) => ({
        ...prevState,
        chatLog: updatedGame.chatLog,
      }));
    });
    return () => {
      clientSocket.off("updated-chat-log");
    };
  }, [gameId, setGameState]);

  //  --------------------------------------------------------

  const sendMessage = (gameId, message, playerName) => {
    clientSocket.emit("send-message", {
      gameId,
      message,
      sender: playerName,
    });
  };

  return (
    <ChatContext.Provider value={{ chatLog, chatLogRef, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: propTypes.node.isRequired,
};
