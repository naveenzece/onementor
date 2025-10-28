const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Submit user question without saving to DB
router.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question || !question.trim()) {
    return res.status(400).json({ error: "Question cannot be empty" });
  }

  try {
    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful mentor AI." },
        { role: "user", content: question },
      ],
    });

    const aiFeedback = response.choices[0].message.content;

    res.json({ aiFeedback });
  } catch (err) {
    console.error("❌ OpenAI API error:", err);

    res.status(500).json({
      aiFeedback:
        "⚠️ AI service is temporarily unavailable. Here’s a mock reply: I understand your question — keep learning and practicing! 🚀",
      error: err.message, // optional for debugging
    });
  }
});

module.exports = router;
