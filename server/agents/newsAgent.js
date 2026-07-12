const { generateText } = require("../services/llm");
const { parseAIResponse } = require("../utils/jsonParser");

async function analyzeNews(companyName) {

    const prompt = `
You are a Senior Financial News Analyst.

Analyze the latest market sentiment for:

${companyName}

Return ONLY valid JSON.

{
  "positiveNews": [
    "",
    "",
    ""
  ],
  "negativeNews": [
    "",
    ""
  ],
  "sentiment": "Positive",
  "score": 80,
  "summary": ""
}

Rules:
- Return ONLY JSON.
- Do not use markdown.
- Do not use triple backticks.
`;

    const response = await generateText(prompt);

    return parseAIResponse(response);
}

module.exports = {
    analyzeNews
};