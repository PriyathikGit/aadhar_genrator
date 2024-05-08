"use strict";
const express = require("express");
const router = express.Router();
function generateUniqueCode() {
    // Generate a random number between 1000000000000000 and 9999999999999999
    const randomNumber = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    return randomNumber.toString();
}
router.get('/generate-code', (req, res) => {
    const uniqueCode = generateUniqueCode();
    res.json({ code: uniqueCode }).status(200);
});
module.exports = router;
