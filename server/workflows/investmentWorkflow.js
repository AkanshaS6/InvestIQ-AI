const { researchCompany } = require("../agents/researchAgent");
const { analyzeFinance } = require("../agents/financeAgent");
const { analyzeNews } = require("../agents/newsAgent");
const { analyzeRisk } = require("../agents/riskAgent");
const { makeDecision } = require("../agents/decisionAgent");

async function analyzeInvestment(company) {

    console.log("Research...");
    const research = await researchCompany(company);
    console.log("✅ Research Done");

    console.log("Finance...");
    const finance = await analyzeFinance(company);
    console.log("✅ Finance Done");

    console.log("News...");
    const news = await analyzeNews(company);
    console.log("✅ News Done");

    console.log("Risk...");
    const risk = await analyzeRisk(company);
    console.log("✅ Risk Done");

    console.log("Decision...");
    const decision = await makeDecision(
        research,
        finance,
        news,
        risk
    );
    console.log("✅ Decision Done");

    return {
        research,
        finance,
        news,
        risk,
        decision
    };
}

module.exports = {
    analyzeInvestment
};