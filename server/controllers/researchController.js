const { researchCompany } = require("../agents/researchAgent");

async function getResearch(req, res) {

    try {

        const { company } = req.body;

        if (!company) {
            return res.status(400).json({
                success: false,
                message: "Company name is required."
            });
        }

        const data = await researchCompany(company);

        res.json({
            success: true,
            data
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
    getResearch
};