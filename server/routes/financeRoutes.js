const express = require("express");

const router = express.Router();

const {
    getFinance
} = require("../controllers/financeController");

router.post("/", getFinance);

module.exports = router;