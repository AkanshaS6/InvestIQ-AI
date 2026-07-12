const { generateText } = require("../services/llm");
const { parseAIResponse } = require("../utils/jsonParser");

async function researchCompany(companyName) {

    const prompt = `
You are a Senior Investment Research Analyst.

Research the following company:

${companyName}

Return ONLY valid JSON.

DO NOT write any explanation.
DO NOT use markdown.
DO NOT use triple backticks.

Use exactly this JSON structure:

{
  "company": "",
  "industry": "",
  "headquarters": "",
  "ceo": "",
  "overview": "",
  "products": [
    "",
    "",
    ""
  ],
  "strengths": [
    "",
    "",
    ""
  ],
  "weaknesses": [
    "",
    "",
    ""
  ]
}
`;

    const response = await generateText(prompt);

    return parseAIResponse(response);
}

module.exports = {
    researchCompany
};