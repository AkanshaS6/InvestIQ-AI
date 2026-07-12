const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ==============================
// Import Routes
// ==============================
const researchRoutes = require("./routes/researchRoutes");
const financeRoutes = require("./routes/financeRoutes");
const newsRoutes = require("./routes/newsRoutes");
const riskRoutes = require("./routes/riskRoutes");
const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();

// ==============================
// Middleware
// ==============================
app.use(cors());
app.use(express.json());

// ==============================
// Health Check Route
// ==============================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "InvestIQ AI",
        message: "Backend Running 🚀",
        version: "1.0.0"
    });
});

// ==============================
// API Routes
// ==============================
app.use("/api/research", researchRoutes);
app.use("/api/finance", financeRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/risk", riskRoutes);
app.use("/api/analyze", analyzeRoutes);

// ==============================
// 404 Route
// ==============================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ==============================
// Global Error Handler
// ==============================
app.use((err, req, res, next) => {
    console.error("Server Error:", err);

    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

// ==============================
// Start Server
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("====================================");
    console.log("🚀 InvestIQ AI Backend Started");
    console.log(`🌐 Server Running : http://localhost:${PORT}`);
    console.log("====================================");
});