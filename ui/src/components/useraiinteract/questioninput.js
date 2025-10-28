"use client";
import { useState } from "react";

export default function QuestionInput({ addMessage }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    addMessage({ sender: "You", message: question });

    try {
      const res = await fetch("http://localhost:8001/api/interact/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      addMessage({ sender: "AI", message: data.aiFeedback });
    } catch (err) {
      addMessage({ sender: "AI", message: "⚠️ Failed to get AI response." });
      console.error(err);
    }

    setQuestion("");
  };

  return (
    <div className="flex gap-2 mt-2">
      <input
        className="flex-grow border rounded p-2"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
