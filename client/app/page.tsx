"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";


export default function Home() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeCompany = async () => {
    if (!company.trim()) {
      alert("Please enter a company name.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/analyze", {
        company,
      });

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze company.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100">
        <section className="max-w-4xl mx-auto py-16 px-6 text-center">

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            InvestIQ AI
          </h1>

          <p className="text-xl text-gray-600 mb-10">
            AI Powered Investment Research Platform
          </p>

          <div className="flex justify-center gap-4">

            <input
              type="text"
              placeholder="Enter company name..."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-96 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

           <button
  onClick={analyzeCompany}
  disabled={loading}
  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg flex items-center gap-2"
>
  {loading && (
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  )}

  {loading ? "Analyzing..." : "Analyze"}
</button>

          </div>
        </section>

        {result && (
          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

            {/* Company Overview */}
            <div  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Company Overview
              </h2>

              <p className="text-gray-700">
                <strong>Company:</strong> {result.research.company}
              </p>

              <p className="text-gray-700">
                <strong>Industry:</strong> {result.research.industry}
              </p>

              <p className="text-gray-700">
                <strong>CEO:</strong> {result.research.ceo}
              </p>

              <p className="text-gray-700">
                <strong>Headquarters:</strong> {result.research.headquarters}
              </p>

            </div>

            {/* Financial Analysis */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Financial Analysis
              </h2>

              <p className="text-gray-700">
                <strong>Revenue Growth:</strong> {result.finance.revenueGrowth}
              </p>

              <p className="text-gray-700">
                <strong>Profitability:</strong> {result.finance.profitability}
              </p>

              <p className="text-gray-700">
                <strong>Cash Flow:</strong> {result.finance.cashFlow}
              </p>

              <p className="text-gray-700">
                <strong>Debt:</strong> {result.finance.debt}
              </p>

              <p className="text-gray-700">
                <strong>Financial Score:</strong> {result.finance.financialScore}
              </p>

            </div>

            {/* Market News */}
           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Market News
              </h2>

              <p className="text-gray-700">
                <strong>Sentiment:</strong> {result.news.sentiment}
              </p>

              <p className="text-gray-700">
                <strong>Score:</strong> {result.news.score}
              </p>

              <ul className="list-disc ml-5 mt-3 text-gray-700">
                {result.news.positiveNews.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>

            </div>

            {/* Risk Analysis */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ⚠️ Risk Analysis
              </h2>

              <p className="text-gray-700">
                <strong>Market Risk:</strong> {result.risk.marketRisk}
              </p>

              <p className="text-gray-700">
                <strong>Competition Risk:</strong> {result.risk.competitionRisk}
              </p>

              <p className="text-gray-700">
                <strong>Technology Risk:</strong> {result.risk.technologyRisk}
              </p>

              <p className="text-gray-700">
                <strong>Regulatory Risk:</strong> {result.risk.regulatoryRisk}
              </p>

              <p className="text-gray-700">
                <strong>Risk Score:</strong> {result.risk.riskScore}
              </p>

            </div>

            {/* Investment Decision */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:col-span-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Investment Decision
              </h2>

              <p className="text-gray-700">
                <strong>Recommendation:</strong> {result.decision.recommendation}
              </p>

              <p className="text-gray-700">
                <strong>Investment Score:</strong> {result.decision.investmentScore}
              </p>

              <p className="text-gray-700">
                <strong>Confidence:</strong> {result.decision.confidence}%
              </p>

              <p className="mt-4 text-gray-700 leading-7">
                {result.decision.finalSummary}
              </p>

            </div>

          </section>
        )}
      </main>
      <Footer/>
    </>
  );
}