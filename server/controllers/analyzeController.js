const { analyzeInvestment } = require("../workflows/investmentWorkflow");

async function analyze(req, res) {

    try {

        const { company } = req.body;

        if (!company) {
            return res.status(400).json({
                success: false,
                message: "Company name is required."
            });
        }

        const result = await analyzeInvestment(company);

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {
    analyze
};