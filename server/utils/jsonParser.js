function parseAIResponse(response) {

    try {

        let cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);

    } catch (error) {

        console.error("JSON Parse Error:", error);

        throw new Error("AI returned invalid JSON.");

    }

}

module.exports = {
    parseAIResponse
};