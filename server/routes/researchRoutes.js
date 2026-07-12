const express = require("express");

const router = express.Router();

const {
    getResearch
} = require("../controllers/researchController");

router.post("/", getResearch);

module.exports = router;