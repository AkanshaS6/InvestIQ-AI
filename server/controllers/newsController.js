const { analyzeNews } = require("../agents/newsAgent");

async function getNews(req, res) {

    try {

        const { company } = req.body;

        if (!company) {
            return res.status(400).json({
                success: false,
                message: "Company name is required."
            });
        }

        const result = await analyzeNews(company);

        res.status(200).json({
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
    getNews
};