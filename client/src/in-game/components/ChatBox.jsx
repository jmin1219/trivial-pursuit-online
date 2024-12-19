import { Button } from "@/components/ui/button";
import { apiFetchChatLog } from "@/services/api/gameApi";
import {
  initializeChatSocket,
  sendMessage,
} from "@/services/sockets/chatSocket";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function ChatBox({ gameId }) {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const chatLogRef = useRef(null);
  const playerData = JSON.parse(localStorage.getItem("player-data"));
  const playerName = playerData ? playerData.name : "Unknown";

  useEffect(() => {
    const fetchChatLog = async () => {
      const fetchedChatLog = await apiFetchChatLog(gameId);
      setChatLog(fetchedChatLog);
    };
    fetchChatLog();
    initializeChatSocket(setChatLog, gameId);
  }, [gameId]);
  console.log(chatLog);

  // Scroll to bottom of chat log when new message is received
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendMessage(gameId, message, playerName);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full p-1 bg-gray-700 text-white rounded-lg">
      <div
        className="flex-1 overflow-y-auto mb-1 px-2 py-1 border rounded-md flex flex-col justify-end"
        ref={chatLogRef}
      >
        {chatLog.map((msg, index) => (
          <div key={index} className="text-left w-full text-sm">
            <span className="font-bold">{msg.sender}:</span> {msg.message}
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 rounded-lg bg-gray-600 text-white border border-white"
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="outline"
          className="text-black "
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

ChatBox.propTypes = {
  gameId: propTypes.string.isRequired,
};
