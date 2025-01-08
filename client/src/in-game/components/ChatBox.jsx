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
    if (e.key === "Enter" && message.trim() !== "") {
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
                className={`inline-block text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] border border-slate-500 rounded-md mb-1 p-1 sm:p-1 sm:px-2 ${
                  msg.sender === playerData.name
                    ? "text-right self-end"
                    : "text-left self-start"
                } leading-tight`}
              >
                {msg.sender === "server" ? (
                  <p className="italic font-bold text-gray-400 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
                    {msg.message}
                  </p>
                ) : (
                  <>
                    {msg.sender !== playerData.name && (
                      <p className="font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
                        {msg.sender}:
                      </p>
                    )}
                    {msg.message}
                  </>
                )}
              </div>
            ))}
      </div>
      <div className="flex gap-1 mt-auto justify-center items-center">
        {/* MESSAGE INPUT FIELD */}
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 w-full h-[90%] rounded-lg bg-gray-600 text-white border border-white text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
