const { generateText } = require("../services/llm");
const { parseAIResponse } = require("../utils/jsonParser");

async function makeDecision(research, finance, news, risk) {

    const prompt = `
You are a Senior Investment Advisor.

Based on the following information, make a final investment recommendation.

Research:
${JSON.stringify(research, null, 2)}

Finance:
${JSON.stringify(finance, null, 2)}

News:
${JSON.stringify(news, null, 2)}

Risk:
${JSON.stringify(risk, null, 2)}

Return ONLY valid JSON.

{
  "recommendation": "BUY | HOLD | SELL",
  "investmentScore": 0,
  "confidence": 0,
  "holdingPeriod": "",
  "reasoning": [
    "",
    "",
    ""
  ],
  "finalSummary": ""
}

Rules:
- investmentScore must be between 0 and 100.
- confidence must be between 0 and 100.
- Return JSON only.
`;

    const response = await generateText(prompt);

    return parseAIResponse(response);
}

module.exports = {
    makeDecision
};