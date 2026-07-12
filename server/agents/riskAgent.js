const { generateText } = require("../services/llm");
const { parseAIResponse } = require("../utils/jsonParser");

async function analyzeRisk(companyName) {

    const prompt = `
You are a Senior Investment Risk Analyst.

Analyze the investment risks of the company:

${companyName}

Return ONLY valid JSON.

{
  "marketRisk":"Low/Medium/High",
  "competitionRisk":"Low/Medium/High",
  "financialRisk":"Low/Medium/High",
  "regulatoryRisk":"Low/Medium/High",
  "technologyRisk":"Low/Medium/High",
  "riskScore":0,
  "summary":""
}

Rules:
- riskScore must be between 0 and 100.
- Higher score = Higher investment risk.
- Return JSON only.
`;

    const response = await generateText(prompt);

    return parseAIResponse(response);
}

module.exports = {
    analyzeRisk
};