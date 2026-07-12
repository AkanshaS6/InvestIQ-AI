const { generateText } = require("../services/llm");

async function analyzeFinance(companyName) {

    const prompt = `
You are a Senior Financial Analyst.

Analyze the company:

${companyName}

Return ONLY valid JSON.

{
    "revenueGrowth":"Excellent/Good/Average/Poor",
    "profitability":"Excellent/Good/Average/Poor",
    "cashFlow":"Excellent/Good/Average/Poor",
    "debt":"Low/Medium/High",
    "valuation":"Undervalued/Fairly Valued/Overvalued",
    "financialScore":85,
    "summary":"Short explanation"
}

Return JSON only.
`;

    const response = await generateText(prompt);

    return JSON.parse(response);
}

module.exports = {
    analyzeFinance
};