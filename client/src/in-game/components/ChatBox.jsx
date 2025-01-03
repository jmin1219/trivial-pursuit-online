import { Button } from "@/components/ui/button";
import { useChatContext } from "@/context/ChatContext";
import { useGameContext } from "@/context/GameContext";
import { useState } from "react";

export default function ChatBox() {
  const playerData = JSON.parse(localStorage.getItem("player-data"));
  const { gameState } = useGameContext();
  const { chatLog, chatLogRef, sendMessage } = useChatContext();

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendMessage(gameState.gameId, message, playerData.name);
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
      {/* MESSAGE LOG */}
      <div
        className="flex-1 overflow-y-auto mb-1 px-2 py-1 border rounded-md flex flex-col-reverse"
        ref={chatLogRef}
      >
        {chatLog &&
          chatLog
            .slice()
            .reverse()
            .map((msg, index) => (
              <div
                key={index}
                className={`w-full text-sm border border-slate-500 rounded-sm mb-1 p-1 ${
                  msg.sender === playerData.name ? "text-right" : "text-left"
                }`}
              >
                {msg.sender === "server" ? (
                  <span className="italic font-bold text-gray-400">
                    {msg.message}
                  </span>
                ) : (
                  <>
                    {msg.sender !== playerData.name && (
                      <span className="font-bold">{msg.sender}:</span>
                    )}{" "}
                    {msg.message}
                  </>
                )}
              </div>
            ))}
      </div>
      <div className="flex gap-1 mt-auto">
        {/* MESSAGE INPUT FIELD */}
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 rounded-lg bg-gray-600 text-white border border-white"
          onKeyDown={handleKeyDown}
        />
        {/* SEND BUTTON */}
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
