const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function generateText(prompt) {
  const MAX_RETRIES = 3;

  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return response.text;

    } catch (error) {

      if (error.status === 503 && i < MAX_RETRIES - 1) {
        console.log("Gemini busy. Retrying...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        continue;
      }

      throw error;
    }
  }
}

module.exports = {
  generateText,
};