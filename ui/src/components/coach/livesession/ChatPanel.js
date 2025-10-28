"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function ChatBox({ sessionId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.emit("join_session", sessionId);

    socket.on("chat_message", ({ sender, message }) => {
      setMessages((prev) => [...prev, { sender, message }]);
    });
  }, [sessionId]);

  const sendMessage = () => {
    socket.emit("chat_message", { sessionId, message: text });
    setMessages((prev) => [...prev, { sender: "You", message: text }]);
    setText("");
  };

  return (
    <div className="border rounded-xl p-4 w-full">
      <div className="h-48 overflow-y-auto mb-2">
        {messages.map((m, idx) => (
          <p key={idx}><b>{m.sender}:</b> {m.message}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-grow border rounded p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-purple-600 text-white px-4 rounded">Send</button>
      </div>
    </div>
  );
}
