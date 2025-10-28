"use client";
import { useState } from "react";
import QuestionInput from "./questioninput";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => setMessages((prev) => [...prev, msg]);

  return (
    <div className="border rounded-xl p-4 w-full max-w-2xl mx-auto">
      <div className="h-96 overflow-y-auto space-y-2">
        {messages.map((m, idx) => (
          <p key={idx}>
            <b>{m.sender}:</b> {m.message}
          </p>
        ))}
      </div>
      <QuestionInput addMessage={addMessage} />
    </div>
  );
}
