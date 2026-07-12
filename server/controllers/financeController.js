const { analyzeFinance } = require("../agents/financeAgent");

async function getFinance(req, res) {

    try {

        const { company } = req.body;

        const result = await analyzeFinance(company);

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {
    getFinance
};